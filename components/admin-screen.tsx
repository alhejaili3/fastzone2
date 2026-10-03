import {redirect} from 'next/navigation';
import {allowedAdmin} from '@/lib/admin';
import {AdminPanel} from '@/components/admin-panel';
export async function AdminScreen({initialTab='overview'}:{initialTab?:string}){
 if(!await allowedAdmin())redirect('/admin/login');
 return <><form action="/api/admin/logout" method="post" style={{position:'fixed',bottom:10,left:15,zIndex:60}}><button className="btn small ghost" type="submit">تسجيل الخروج</button></form><AdminPanel initialTab={initialTab}/></>;
}
