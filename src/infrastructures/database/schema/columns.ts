import { varchar } from 'drizzle-orm/mysql-core';

export const ID = varchar({ length: 45 }).notNull().primaryKey();
export const Var255 = varchar({ length: 255 });
