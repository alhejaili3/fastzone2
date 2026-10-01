import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const records = sqliteTable('records', {
  id: text('id').primaryKey(),
  kind: text('kind').notNull(),
  title: text('title').notNull(),
  body: text('body').notNull().default(''),
  image: text('image').notNull().default(''),
  price: text('price').notNull().default(''),
  rating: integer('rating').notNull().default(0),
  meta: text('meta').notNull().default(''),
  status: text('status').notNull().default('published'),
  position: integer('position').notNull().default(0),
  createdAt: text('created_at').notNull(),
});
export const settings = sqliteTable('settings', { key: text('key').primaryKey(), value: text('value').notNull() });
export const bookings = sqliteTable('bookings', {
  id: text('id').primaryKey(), name: text('name').notNull(), phone: text('phone').notNull(),
  car: text('car').notNull(), service: text('service').notNull(), date: text('date').notNull(),
  time: text('time').notNull(), status: text('status').notNull().default('new'),
  createdAt: text('created_at').notNull()
});
