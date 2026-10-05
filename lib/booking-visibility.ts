export const bookingRulePrefix='bookingService:';
export type BookingServiceRule={enabled:boolean;packageIds:string[]|null;instructions:string;instructionsEn:string};
export function bookingServiceRule(settings:Record<string,string>,serviceId:string):BookingServiceRule{
 const fallback:BookingServiceRule={enabled:serviceId==='transmission-fluid',packageIds:null,instructions:'',instructionsEn:''};
 const raw=settings[bookingRulePrefix+serviceId];
 if(!raw)return fallback;
 try{const rule=JSON.parse(raw);if(typeof rule.enabled!=='boolean'||!(rule.packageIds===null||Array.isArray(rule.packageIds)))throw Error();return {enabled:rule.enabled,packageIds:rule.packageIds===null?null:rule.packageIds.filter((id:unknown):id is string=>typeof id==='string'),instructions:typeof rule.instructions==='string'?rule.instructions:'',instructionsEn:typeof rule.instructionsEn==='string'?rule.instructionsEn:''}}catch{return {...fallback,enabled:false}}
}
export function bookingSystemEnabled(settings:Record<string,string>){return settings.bookingEnabled!=='false'}
export function serviceBookingEnabled(settings:Record<string,string>,serviceId:string){
 const rule=bookingServiceRule(settings,serviceId);
 return bookingSystemEnabled(settings)&&rule.enabled&&(rule.packageIds===null||rule.packageIds.length>0);
}
export function packageBookingEnabled(settings:Record<string,string>,serviceId:string,packageId:string){
 const rule=bookingServiceRule(settings,serviceId);
 return serviceBookingEnabled(settings,serviceId)&&(rule.packageIds===null||rule.packageIds.includes(packageId));
}
export function bookingsEnabled(settings:Record<string,string>){
 const ids=new Set(['transmission-fluid',...Object.keys(settings).filter(key=>key.startsWith(bookingRulePrefix)).map(key=>key.slice(bookingRulePrefix.length))]);
 return [...ids].some(id=>serviceBookingEnabled(settings,id));
}
