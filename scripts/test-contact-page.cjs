// Run with: node scripts/test-contact-page.cjs
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const ts=require('typescript');
const {renderToStaticMarkup}=require('react-dom/server');
function load(file,mocks={}){
 const exports={};
 const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX}}).outputText;
 vm.runInNewContext(code,{exports,require:name=>name in mocks?mocks[name]:require(name),URL,Response,console,Date,process},{filename:file});
 return exports;
}
const contact=load('lib/contact-page.ts');
const shared={phone:'0558075854',whatsapp:'966558075854',address:'المدينة المنورة – محطة شموخ',hours:'يوميًا',logo:'/fast-zone-emblem-transparent.png'};
const config=contact.contactConfig(shared);
assert.equal(contact.internationalPhone('٠٥٥٨٠٧٥٨٥٤'),'966558075854');
assert.equal(contact.internationalPhone('+966 55 807 5854'),'966558075854');
assert.equal(contact.httpsUrl('javascript:alert(1)'), '');
assert.equal(contact.httpsUrl('https://instagram.com.attacker.example/me',['instagram.com']), '');
assert.equal(contact.httpsUrl('https://user:pass@instagram.com/me',['instagram.com']), '');
assert.equal(config.website,'https://www.fastzone.sa/');
config.socials.instagram.url='https://www.instagram.com/test_profile/';
config.socials.snapchat.url='https://www.snapchat.com/add/test_profile';
config.socials.snapchat.visible=false;
assert.ok(contact.validateContactConfig(config).config);
for(const bad of ['javascript:alert(1)','https://attacker.example/profile','https://instagram.com.attacker.example/profile']){
 const candidate=JSON.parse(JSON.stringify(config));candidate.socials.instagram.url=bad;
 assert.ok(contact.validateContactConfig(candidate).error,'Reject unsafe profile: '+bad);
}
assert.ok(contact.validateContactConfig({...config,maps:'https://attacker.example'}).error);
assert.ok(contact.validateContactConfig({...config,phone:'12'}).error);
let authenticated=false,writes=0,stored='{}';
const db={insert(){return {values(row){return {async onConflictDoUpdate(){assert.equal(row.key,'contactPage');stored=row.value;writes++;}};}};}};
const admin=load('app/api/admin/route.ts',{
 '@/lib/contact-page':contact,'@/lib/admin':{allowedAdmin:async()=>authenticated},'@/db':{getDb:()=>db},
 '@/db/schema':{records:{},settings:{key:'key'},bookings:{}},'@/lib/site':{defaults:{contactPage:'{}'}},
 '@/lib/booking-visibility':{},'@/lib/catalog':{},
});
const request=body=>new Request('https://www.fastzone.sa/api/admin',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
(async()=>{
 assert.equal((await admin.POST(request({type:'contactPage',config}))).status,403);
 assert.equal(writes,0);
 authenticated=true;
 assert.equal((await admin.POST(request({type:'contactPage',config:{...config,website:'http://unsafe.example'}}))).status,400);
 assert.equal(writes,0);
 assert.equal((await admin.POST(request({type:'contactPage',config}))).status,200);
 assert.equal(writes,1);
 assert.equal(JSON.parse(stored).socials.instagram.url,config.socials.instagram.url);
 const social=load('components/social-mark.tsx',{'@/lib/contact-page':contact});
 const share=load('components/contact-share.tsx');
 const page=load('app/contact/page.tsx',{
  'next/navigation':{notFound(){throw Error('NOT_FOUND');}},
  '@/lib/site':{loadSite:async()=>({settings:{...shared,contactPage:stored}}),safeImage:value=>value},
  '@/lib/contact-page':contact,'@/components/social-mark':social,'@/components/contact-share':share,'./contact.css':{},
 });
 let html=renderToStaticMarkup(await page.default());
 for(const link of ['tel:+966558075854','https://wa.me/966558075854','https://www.google.com/maps/search/','https://www.fastzone.sa/','https://www.instagram.com/test_profile/'])assert.ok(html.includes(link),'Rendered destination '+link);
 assert.ok(!html.includes('https://www.snapchat.com/add/test_profile'),'Hidden social stays hidden');
 assert.ok(!html.includes('فيسبوك'),'Unconfigured social stays hidden');
 assert.ok(html.includes('مشاركة البطاقة'));
 stored=JSON.stringify({...JSON.parse(stored),showPhone:false,showWhatsapp:false,showMaps:false,showWebsite:false});
 html=renderToStaticMarkup(await page.default());
 for(const href of ['href="tel:','href="https://wa.me/','href="https://www.google.com/maps/','href="https://www.fastzone.sa/'])assert.ok(!html.includes(href),'Hidden primary action '+href);
 stored=JSON.stringify({...JSON.parse(stored),enabled:false});
 await assert.rejects(()=>page.default(),/NOT_FOUND/);
 console.log('PASS: validated links, Arabic phone numbers, authenticated atomic save, settings-to-page rendering, social/primary visibility and page disable');
})().catch(error=>{console.error(error);process.exitCode=1;});
