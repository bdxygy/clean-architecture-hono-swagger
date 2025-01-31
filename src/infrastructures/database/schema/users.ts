import { mysqlTable as t, timestamp } from 'drizzle-orm/mysql-core';
import { ID, Var255 } from './columns';

export const usersTable = t('users', {
  id: ID,
  name: Var255,
  email: Var255.notNull(),
  password: Var255.notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow().onUpdateNow(),
});
