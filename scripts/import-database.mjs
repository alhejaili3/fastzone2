import {readFile} from 'node:fs/promises';
const required=['CLOUDFLARE_ACCOUNT_ID','CLOUDFLARE_D1_DATABASE_ID','CLOUDFLARE_D1_API_TOKEN'];for(const name of required)if(!process.env[name])throw Error('Missing '+name);
const url=`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/d1/database/${process.env.CLOUDFLARE_D1_DATABASE_ID}/query`;
async function query(sql,params=[]){const r=await fetch(url,{method:'POST',headers:{Authorization:`Bearer ${process.env.CLOUDFLARE_D1_API_TOKEN}`,'Content-Type':'application/json'},body:JSON.stringify({sql,params})});const data=await r.json();if(!r.ok||!data.success||data.result.some(x=>!x.success))throw Error('Database request failed: '+data.errors?.map(e=>e.message).join(';'));return data.result}
// Import only into an EMPTY database; refuse to modify an existing installation.
const existing=await query("SELECT name FROM sqlite_master WHERE type='table' AND name IN ('records','settings','bookings')");if(existing[0].results.length)throw Error('The database already contains Fast Zone tables. Create a NEW empty D1 database.');
const schema=await readFile(new URL('../backup/schema.sql',import.meta.url),'utf8');for(const statement of schema.split(';').map(s=>s.trim()).filter(Boolean))await query(statement);
const data=JSON.parse(await readFile(new URL('../backup/database.json',import.meta.url),'utf8'));
const columns={records:['id','kind','title','body','image','price','rating','meta','status','position','created_at'],settings:['key','value'],bookings:['id','name','phone','car','service','date','time','status','created_at']};
for(const [table,cols] of Object.entries(columns)){const rows=data[table];for(let i=0;i<rows.length;i+=5){const batch=rows.slice(i,i+5);await query(`INSERT INTO ${table} (${cols.join(',')}) VALUES ${batch.map(()=>`(${cols.map(()=>'?').join(',')})`).join(',')}`,batch.flatMap(row=>cols.map(c=>row[c]??'')))}console.log(`Imported ${table}: ${rows.length}`)}
console.log('Database import complete. Configure Vercel environment variables before opening /admin.');
