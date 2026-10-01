import {drizzle} from 'drizzle-orm/d1';
import {d1} from '@/lib/d1-rest';
import * as schema from './schema';
export function getDb(){return drizzle(d1 as unknown as D1Database,{schema})}
