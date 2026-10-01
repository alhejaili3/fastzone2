import 'server-only';
type QueryResult={success:boolean,results:Record<string,unknown>[],meta:Record<string,number>};
function credentials(){const account=process.env.CLOUDFLARE_ACCOUNT_ID,database=process.env.CLOUDFLARE_D1_DATABASE_ID,token=process.env.CLOUDFLARE_D1_API_TOKEN;if(!account||!database||!token)throw Error('Configure Cloudflare D1 environment variables');return {account,database,token}}
export async function d1Request(sql:string,params:unknown[]=[],raw=false){const {account,database,token}=credentials();const r=await fetch(`https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(account)}/d1/database/${encodeURIComponent(database)}/${raw?'raw':'query'}`,{method:'POST',headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},body:JSON.stringify({sql,params}),cache:'no-store',signal:AbortSignal.timeout(20000)});const data=await r.json() as {success:boolean,result?:{success:boolean,results:any,meta:Record<string,number>}[]};if(!r.ok||!data.success||!data.result?.[0]?.success)throw Error('D1 query failed');return data.result![0]}
class Statement{
 constructor(readonly sql:string,readonly params:unknown[]=[]){ }
 bind(...params:unknown[]){return new Statement(this.sql,params)}
 async all<T=Record<string,unknown>>(){return await d1Request(this.sql,this.params) as {success:boolean,results:T[],meta:Record<string,number>}}
 async run(){return await d1Request(this.sql,this.params) as QueryResult}
 async raw<T=unknown[]>({columnNames=false}:{columnNames?:boolean}={}){const result=await d1Request(this.sql,this.params,true);const {columns=[],rows=[]}=result.results??{};return (columnNames?[columns,...rows]:rows) as T[]}
 async first(column?:string){const {results}=await this.all();return column?results[0]?.[column]??null:results[0]??null}
}
export const d1={prepare:(sql:string)=>new Statement(sql),async batch(statements:Statement[]){const results:QueryResult[]=[];for(const s of statements)results.push(await s.run());return results}};
