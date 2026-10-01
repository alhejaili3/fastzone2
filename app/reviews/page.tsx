import {loadSite} from '@/lib/site';
import {loadGoogleReviews} from '@/lib/google-reviews';
import {GoogleReviews} from '@/components/google-reviews';
import {LocalReviews} from '@/components/local-reviews';
import {ReviewForm} from '@/components/review-form';
import {Shell} from '@/components/site-shell';
export const dynamic='force-dynamic';export const metadata={title:'آراء العملاء'};
export default async function Reviews(){const {items,settings}=await loadSite();const local=items.filter(x=>x.kind==='review'&&x.status==='published').sort((a,b)=>b.createdAt.localeCompare(a.createdAt));const google=await loadGoogleReviews(settings.googlePlaceId||'',settings.googleReviewUrl||'');const writeUrl=settings.googleReviewUrl||'';return <Shell s={settings}><main className="section wrap reviews-page"><LocalReviews items={local}/><ReviewForm/>{(google||writeUrl)&&<GoogleReviews data={google} writeUrl={writeUrl}/>}</main></Shell>}
