import 'server-only';
import {d1Request} from '@/lib/d1-rest';
export const MEDIA_CHUNK_SIZE=524288;
export const MAX_PDF_SIZE=75_000_000;
export const MEDIA_BUDGET=200_000_000;
let ready:Promise<void>|undefined;
export function ensureMediaStore(){return ready??=(async()=>{await d1Request('CREATE TABLE IF NOT EXISTS media_uploads (id TEXT PRIMARY KEY, type TEXT NOT NULL, size INTEGER NOT NULL, complete INTEGER NOT NULL DEFAULT 0, created_at INTEGER NOT NULL)');await d1Request('CREATE TABLE IF NOT EXISTS media_chunks (id TEXT NOT NULL, part INTEGER NOT NULL, data TEXT NOT NULL, bytes INTEGER NOT NULL, PRIMARY KEY(id,part))')})().catch(e=>{ready=undefined;throw e})}
export async function mediaInfo(id:string){await ensureMediaStore();const r=await d1Request('SELECT id,type,size,complete FROM media_uploads WHERE id=?',[id]);return r.results[0] as {id:string,type:string,size:number,complete:number}|undefined}
export async function removeUpload(id:string){await d1Request('DELETE FROM media_chunks WHERE id=?',[id]);await d1Request('DELETE FROM media_uploads WHERE id=? AND complete=0',[id])}
