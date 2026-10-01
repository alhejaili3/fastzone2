import {defaults} from '@/lib/site';

export function bookingConfig(settings:Record<string,string>){
 const time=(value:string,fallback:string)=>/^([01]\d|2[0-3]):[0-5]\d$/.test(value)?value:fallback;
 const number=(value:string,fallback:number,min:number,max:number)=>{const n=Number(value);return Number.isInteger(n)&&n>=min&&n<=max?n:fallback};
 return {start:time(settings.bookingStart||'',defaults.bookingStart),end:time(settings.bookingEnd||'',defaults.bookingEnd),interval:number(settings.bookingInterval||'',30,15,120),capacity:number(settings.bookingCapacity||'',4,1,100),days:number(settings.bookingDays||'',14,1,90)};
}
export function todayInRiyadh(){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Riyadh',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date())}
export function nowInRiyadh(){return new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Riyadh',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(new Date())}
export function slotsForDate(date:string,config:ReturnType<typeof bookingConfig>){
 const today=todayInRiyadh();
 if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||!Number.isFinite(Date.parse(date+'T00:00:00Z'))||new Date(date+'T00:00:00Z').toISOString().slice(0,10)!==date)return [];
 const offset=(Date.parse(date+'T00:00:00Z')-Date.parse(today+'T00:00:00Z'))/86400000;
 if(offset<0||offset>=config.days)return [];
 const minutes=(time:string)=>Number(time.slice(0,2))*60+Number(time.slice(3,5));
 const start=minutes(config.start),end=minutes(config.end);
 const current=minutes(nowInRiyadh());
 const result:string[]=[];
 for(let n=start;n<end;n+=config.interval){if(date===today&&n<current+30)continue;result.push(String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0'))}
 return result;
}
