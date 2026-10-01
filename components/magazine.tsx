'use client';
import {useEffect,useRef,useState} from 'react';
import {ArrowLeft,ArrowRight,Download,Maximize2,Minus,Plus} from 'lucide-react';
import type {PDFDocumentProxy} from 'pdfjs-dist';

type MagazineDocument=PDFDocumentProxy|{numPages:number,pages:string[]};
function Page({doc,index,zoom}:{doc:MagazineDocument,index:number,zoom:number}){
 const canvas=useRef<HTMLCanvasElement>(null),container=useRef<HTMLDivElement>(null);
 const [width,setWidth]=useState(0),[error,setError]=useState(false);
 useEffect(()=>{const el=container.current;if(!el)return;const obs=new ResizeObserver(()=>setWidth(el.clientWidth));obs.observe(el);setWidth(el.clientWidth);return()=>obs.disconnect()},[]);
 useEffect(()=>{if('pages' in doc||!width||!canvas.current||index>doc.numPages)return;let cancelled=false;let task:{cancel:()=>void,promise:Promise<unknown>}|undefined;
 (async()=>{try{const page=await doc.getPage(index);if(cancelled)return;const base=page.getViewport({scale:1});const scale=Math.min((width/base.width)*zoom*Math.min(devicePixelRatio,2),3);const viewport=page.getViewport({scale});const ctx=canvas.current?.getContext('2d');if(!ctx||!canvas.current)return;canvas.current.width=Math.floor(viewport.width);canvas.current.height=Math.floor(viewport.height);task=page.render({canvas:canvas.current,canvasContext:ctx,viewport});await task.promise;setError(false)}catch(e){if(!cancelled&&!(e instanceof Error&&e.name==='RenderingCancelledException'))setError(true)}})();return()=>{cancelled=true;task?.cancel()}
 },[doc,index,width,zoom]);
 return <div ref={container} className="mag-page" data-page-index={index} aria-label={'صفحة '+index}>{index<=doc.numPages?<>{error?<p>تعذر عرض هذه الصفحة. يمكنك فتح ملف PDF مباشرة.</p>:'pages' in doc?<img src={doc.pages[index-1]} alt={'صفحة '+index} width={1202} height={1700} decoding="async" style={{width:100*zoom+'%',height:'auto',maxWidth:'none'}}/>:<canvas ref={canvas} style={{width:100*zoom+'%'}}/>}<span className="mag-page-number">{index}</span></>:<div className="mag-end"><span>فاست زون</span></div>}</div>
}
type TurningSheet={image:string,back:string,side:'left'|'right',left:number,top:number,width:number,height:number,stationary?:{image:string,left:number,top:number,width:number,height:number}};
// A sheet is tessellated into narrow surfaces; each surface follows the curved
// paper cross-section, rather than rotating the entire page as a rigid plane.
function CurvedSheet({sheet}:{sheet:TurningSheet}){
 const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{let frame=0;const started=performance.now();const strips=Array.from(root.current?.children??[]) as HTMLElement[];
 function draw(now:number){const raw=Math.min(1,(now-started)/780);const t=raw*raw*(3-2*raw);const bend=Math.sin(Math.PI*t);const sign=sheet.side==='right'?1:-1;const segment=sheet.width/strips.length;let x=sheet.side==='right'?0:sheet.width,z=0;
 strips.forEach((strip,i)=>{const distance=(i+.5)/strips.length;const angle=Math.PI*t+bend*.72*Math.sin(Math.PI*distance);strip.style.transform=`translate3d(${x}px,0,${z}px) rotateY(${-sign*angle}rad)`;strip.style.setProperty('--paper-shade',String(.08+.32*bend*distance));x+=sign*segment*Math.cos(angle);z+=segment*Math.sin(angle)});
 if(raw<1)frame=requestAnimationFrame(draw)}frame=requestAnimationFrame(draw);return()=>cancelAnimationFrame(frame)
 },[sheet]);
 const count=24,segment=sheet.width/count;
 return <>{sheet.stationary&&<img className="mag-stationary-page" src={sheet.stationary.image} alt="" aria-hidden="true" style={{left:sheet.stationary.left,top:sheet.stationary.top,width:sheet.stationary.width,height:sheet.stationary.height}}/>}<div ref={root} className="mag-curved-sheet" aria-hidden="true" style={{left:sheet.left,top:sheet.top,width:sheet.width,height:sheet.height}}>{Array.from({length:count},(_,i)=>{const texture=sheet.side==='right'?i*segment:sheet.width-(i+1)*segment;return <div key={i} className={'mag-paper-strip '+(sheet.side==='left'?'from-left':'')} style={{width:segment+.6,height:sheet.height}}><div className="mag-paper-front" style={{backgroundImage:`url("${sheet.image}")`,backgroundSize:`${sheet.width}px ${sheet.height}px`,backgroundPosition:`-${texture}px 0`}}/><div className="mag-paper-back" style={{backgroundImage:sheet.back?`url("${sheet.back}")`:undefined,backgroundSize:`${sheet.width}px ${sheet.height}px`,backgroundPosition:`-${sheet.width-texture-segment}px 0`}}/></div>})}</div></>
}
export function Magazine({url,title,pages}:{url:string,title:string,pages?:string[]}){
 const [doc,setDoc]=useState<MagazineDocument|null>(pages?.length?{numPages:pages.length,pages}:null),[error,setError]=useState(''),[page,setPage]=useState(1),[zoom,setZoom]=useState(1),[mobile,setMobile]=useState(false),[turn,setTurn]=useState<'next'|'prev'|null>(null);
 const stage=useRef<HTMLDivElement>(null),touchX=useRef<number|null>(null),timer=useRef<ReturnType<typeof setTimeout>|null>(null),turning=useRef(false),ignoreEdgeUntil=useRef(0);
 useEffect(()=>{const media=window.matchMedia('(max-width: 720px)');const update=()=>setMobile(media.matches);update();media.addEventListener('change',update);return()=>media.removeEventListener('change',update)},[]);
 useEffect(()=>{if(pages?.length){setDoc({numPages:pages.length,pages});return}let active=true;let loading:{destroy:()=>Promise<void>}|undefined;(async()=>{try{const pdfjs=await import('pdfjs-dist/legacy/build/pdf.mjs');pdfjs.GlobalWorkerOptions.workerSrc='/pdf.worker-5-7-284-legacy.min.mjs';loading=pdfjs.getDocument({url,disableStream:true,disableAutoFetch:true,rangeChunkSize:262144});const pdf=await (loading as ReturnType<typeof pdfjs.getDocument>).promise;if(active){setPage(1);setError('');setDoc(pdf)}else await pdf.destroy()}catch{if(active)setError('تعذر فتح الكتالوج. جرّب فتح ملف PDF مباشرة.') }} )();return()=>{active=false;void loading?.destroy()}},[url,pages]);
 useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current)},[]);
 const step=mobile?1:2;const max=doc?(mobile?doc.numPages:doc.numPages===1?1:doc.numPages-doc.numPages%2):1;
 const cover=page===1&&!mobile;
 const [outgoing,setOutgoing]=useState<TurningSheet|null>(null);
 const [jump,setJump]=useState('1');
 useEffect(()=>setJump(String(page)),[page]);
 useEffect(()=>{if(!doc)return;const next=mobile?page+1:page===1?2:page+2;for(const index of mobile?[next]:[next,next+1])if(index<=doc.numPages){if('pages' in doc){const image=new Image();image.src=doc.pages[index-1]}else void doc.getPage(index).catch(()=>{})}},[doc,page,step,mobile]);
 function flip(direction:'next'|'prev'){
  if(!doc||turning.current)return;
  const next=mobile?page+(direction==='next'?1:-1):direction==='next'?(page===1?2:page+2):(page===2?1:page-2);
  if(next<1||next>max)return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){setPage(next);return}
  const rtl=getComputedStyle(stage.current!).direction==='rtl';
  const side=direction==='next'?(rtl?'left':'right'):(rtl?'right':'left');
  const index=page+(!mobile&&!cover&&direction==='next'?1:0);
  const leaf=stage.current?.querySelector<HTMLElement>(`[data-page-index="${index}"]`);
  let image='pages' in doc?doc.pages[index-1]:'';
  if(!image){try{image=leaf?.querySelector('canvas')?.toDataURL()??''}catch{}}
  if(!leaf||!stage.current||!image){setPage(next);return}
  const rect=leaf.getBoundingClientRect(),bounds=stage.current.getBoundingClientRect();
  const backIndex=index+(direction==='next'?1:-1);
  const otherIndex=direction==='next'?page:page+1;
  const other=!mobile&&!cover?stage.current.querySelector<HTMLElement>(`[data-page-index="${otherIndex}"]`):null;
  let stationary:TurningSheet['stationary'];
  if(other){const r=other.getBoundingClientRect();let source='pages' in doc?doc.pages[otherIndex-1]:'';if(!source){try{source=other.querySelector('canvas')?.toDataURL()??''}catch{}}if(source)stationary={image:source,left:r.left-bounds.left+stage.current.scrollLeft,top:r.top-bounds.top+stage.current.scrollTop,width:r.width,height:r.height}}

  turning.current=true;
  setOutgoing({image,back:'pages' in doc?doc.pages[backIndex-1]??'':'',side,left:rect.left-bounds.left+stage.current.scrollLeft,top:rect.top-bounds.top+stage.current.scrollTop,width:rect.width,height:rect.height,stationary});setTurn(direction);setPage(next);
  timer.current=setTimeout(()=>{setTurn(null);setOutgoing(null);turning.current=false},800);
 }
 function goTo(value:number){if(!doc||turn)return;const target=Math.max(1,Math.min(doc.numPages,value));setPage(mobile||target===1?target:target-target%2)}

 useEffect(()=>{function key(e:KeyboardEvent){if((e.target as HTMLElement)?.closest('input,textarea,select,button'))return;const rtl=document.documentElement.dir==='rtl';if(e.key==='ArrowLeft')flip(rtl?'next':'prev');if(e.key==='ArrowRight')flip(rtl?'prev':'next')}document.addEventListener('keydown',key);return()=>document.removeEventListener('keydown',key)});
 useEffect(()=>{setPage(current=>Math.min(Math.max(1,mobile||current===1?current:current-current%2),doc?Math.max(1,doc.numPages):1))},[mobile,doc]);
 return <section className="magazine" aria-label={'قارئ '+title}><div className="mag-toolbar"><div className="mag-toolbar-actions"><button type="button" onClick={()=>flip('prev')} disabled={!doc||page<=1||!!turn} aria-label="الصفحة السابقة"><ArrowRight size={19}/></button><span aria-live="polite">{doc?`${page}${!mobile&&!cover&&page+1<=doc.numPages?'–'+(page+1):''} / ${doc.numPages}`:'جارٍ التحميل'}</span><button type="button" onClick={()=>flip('next')} disabled={!doc||page>=max||!!turn} aria-label="الصفحة التالية"><ArrowLeft size={19}/></button></div><div className="mag-toolbar-actions"><button type="button" aria-label="تصغير" onClick={()=>setZoom(z=>Math.max(.75,Number((z-.25).toFixed(2))))} disabled={zoom<=.75}><Minus size={18}/></button><span>{Math.round(zoom*100)}%</span><button type="button" aria-label="تكبير" onClick={()=>setZoom(z=>Math.min(1.75,Number((z+.25).toFixed(2))))} disabled={zoom>=1.75}><Plus size={18}/></button><button type="button" aria-label="ملء الشاشة" onClick={()=>{if(document.fullscreenElement)void document.exitFullscreen?.();else void stage.current?.requestFullscreen?.().catch(()=>{})}}><Maximize2 size={18}/></button><a href={url} target="_blank" rel="noopener noreferrer" title="فتح PDF" aria-label="فتح ملف PDF"><Download size={18}/></a></div></div>
 {error?<div className="empty">{error} <a href={url} target="_blank" rel="noopener noreferrer">فتح الملف</a></div>:doc?<div ref={stage} className={'mag-stage '+(cover?'mag-cover-stage ':'')+(turn?'turn-'+turn:'')} onTouchStart={e=>touchX.current=e.touches[0]?.clientX??null} onTouchEnd={e=>{if(touchX.current===null)return;const diff=e.changedTouches[0].clientX-touchX.current;if(zoom===1&&Math.abs(diff)>65){ignoreEdgeUntil.current=Date.now()+800;flip(document.documentElement.dir==='rtl'?(diff>0?'next':'prev'):(diff<0?'next':'prev'));}touchX.current=null}}><div className={"mag-spread"+(cover?" mag-cover-spread":"")}><Page doc={doc} index={page} zoom={zoom}/>{!mobile&&!cover&&<Page doc={doc} index={page+1} zoom={zoom}/>}<button type="button" className="mag-edge mag-edge-prev" aria-label="تقليب إلى الصفحة السابقة" title="الصفحة السابقة" disabled={page<=1||!!turn} onClick={()=>{if(Date.now()>=ignoreEdgeUntil.current)flip('prev')}}><span>السابق</span></button><button type="button" className="mag-edge mag-edge-next" aria-label="تقليب إلى الصفحة التالية" title="الصفحة التالية" disabled={page>=max||!!turn} onClick={()=>{if(Date.now()>=ignoreEdgeUntil.current)flip('next')}}><span>التالي</span></button></div>{turn&&outgoing&&<CurvedSheet sheet={outgoing}/>}</div>:<div className="mag-loading" role="status">جارٍ تجهيز صفحات الكتالوج...</div>}
 {doc&&<div className="mag-bottom"><form className="mag-jump" onSubmit={e=>{e.preventDefault();goTo(Number(jump)||1)}}><label>انتقل إلى الصفحة <input type="number" min={1} max={doc.numPages} value={jump} onChange={e=>setJump(e.target.value)} /></label><button type="submit" disabled={!!turn}>انتقال</button></form><input type="range" aria-label="انتقل بين صفحات الكتالوج" min={1} max={max} step={1} value={page} disabled={!!turn} onChange={e=>goTo(Number(e.target.value))}/><p>اضغط على طرف الصفحة للتقليب، أو اسحب على الجوال.</p></div>}</section>
}
