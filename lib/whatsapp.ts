export function whatsappLink(settings:Record<string,string>, service?:string, packageName?:string){
 const phone=(settings.whatsapp||'').replace(/\D/g,'');
 if(phone.length<10||phone.length>15)return '';
 const template=service?(settings.whatsappServiceTemplate||'مرحبًا فاست زون، أود معرفة تفاصيل خدمة {service}{package}.'):(settings.whatsappGreeting||'مرحبًا فاست زون، أود الاستفسار عن خدماتكم.');
 const message=template.replaceAll('{service}',service||'').replaceAll('{package}',packageName?'، باقة '+packageName:'');
 return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
