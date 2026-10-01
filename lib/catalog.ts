/** Categories are car systems. Existing service/article records remain compatible. */
export const defaultServiceCategory:Record<string,string>={
  'engine-oil':'cat-oils',computer:'cat-electrical',radiator:'cat-cooling',steering:'cat-steering',
  catalytic:'cat-exhaust','engine-tune':'cat-engine','engine-head':'cat-engine',smoke:'cat-engine',battery:'cat-electrical'
};
export const defaultArticleCategory:Record<string,string>={'oil-guide':'cat-oils','cooling-guide':'cat-cooling'};
export function categoryFor(item:{kind:string,id:string,meta:string}){
  return item.meta||(item.kind==='article'?defaultArticleCategory[item.id]:defaultServiceCategory[item.id])||'';
}
export const categoryIconChoices=[['engine','المحرك'],['oils','الزيوت والفلاتر'],['cooling','التبريد'],['exhaust','العادم'],['steering','التوجيه'],['electrical','الكهرباء'],['general','عام']] as const;
