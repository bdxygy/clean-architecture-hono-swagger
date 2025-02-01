import { bigint, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const ID = varchar({ length: 45 }).notNull().primaryKey();
export const Var255 = varchar({ length: 255 });
export const BigN = bigint({ mode: 'number' });
export const metaTable = {
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow().onUpdateNow(),
  deletedAt: timestamp(),
};
