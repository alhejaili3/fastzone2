import {AdminScreen} from '@/components/admin-screen';
export const dynamic='force-dynamic';
export const metadata={title:'إعدادات الحجوزات'};
export default function Page(){return <AdminScreen initialTab='booking-settings'/>}
