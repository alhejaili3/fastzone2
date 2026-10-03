import {AdminScreen} from '@/components/admin-screen';
export const dynamic='force-dynamic';
export const metadata={title:'لوحة الإدارة'};
const sections=['overview','category','service','catalog','offer','article','review','appearance','settings'];
export default async function Admin({searchParams}:{searchParams:Promise<{section?:string}>}){
 const {section}=await searchParams;
 return <AdminScreen initialTab={section&&sections.includes(section)?section:'overview'}/>;
}
