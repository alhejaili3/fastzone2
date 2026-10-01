'use client';
import {useState} from 'react';
export function ReviewForm(){
 const [rating,setRating]=useState(0),[hover,setHover]=useState(0),[msg,setMsg]=useState(''),[busy,setBusy]=useState(false);
 async function submit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();if(!rating){setMsg('اختر عدد النجوم أولًا.');return}
  const form=e.currentTarget;setBusy(true);setMsg('');
  try{const data=Object.fromEntries(new FormData(form));const res=await fetch('/api/reviews',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({...data,rating})});const result=await res.json() as {error?:string};if(!res.ok)throw Error(result.error||'تعذر إرسال التقييم');setMsg('شكرًا لمشاركتك. سيظهر تقييمك بعد مراجعته.');form.reset();setRating(0)}
  catch(error){setMsg(error instanceof Error?error.message:'تعذر الاتصال. حاول مرة أخرى.')}finally{setBusy(false)}
 }
 return <form onSubmit={submit} className="card review-form" id="write-review">
  <span className="eyebrow">تقييمات فاست زون</span><h2>كيف كانت تجربتك معنا؟</h2>
  <div className="review-form-stars" role="group" aria-label="اختر تقييمك من خمس نجوم" onMouseLeave={()=>setHover(0)}>{[1,2,3,4,5].map(n=><button key={n} type="button" className={n<=(hover||rating)?'active':''} onClick={()=>{setRating(n);setMsg('')}} onMouseEnter={()=>setHover(n)} onFocus={()=>setHover(n)} onBlur={()=>setHover(0)} aria-label={`${n} من 5 نجوم`} aria-pressed={rating===n}>★</button>)}</div>
  <label className="label">اسمك<input className="field" name="title" placeholder="الاسم الذي سيظهر مع التقييم" required maxLength={70}/></label>
  <label className="label">تعليقك<textarea className="field" name="body" placeholder="حدثنا عن تجربتك في المركز" required minLength={10} maxLength={1000} rows={4}/></label>
  <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="review-honeypot"/>
  <p className="muted">تقييمك خاص بموقع فاست زون، ويظهر للزوار بعد مراجعته.</p>
  <button className="btn" type="submit" disabled={busy}>{busy?'جارٍ الإرسال':'إرسال التقييم'}</button><p role="status" aria-live="polite">{msg}</p>
 </form>
}
