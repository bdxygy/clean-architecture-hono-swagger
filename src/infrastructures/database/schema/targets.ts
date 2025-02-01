import { mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { usersTable } from './users';
import { relations } from 'drizzle-orm';
import { postsTable } from './posts';
import { metaTable } from '../columns';

export const targetsTable = mysqlTable('targets', {
  id: varchar({ length: 45 }).notNull().primaryKey().unique(),
  domain: varchar({ length: 255 }).notNull(),
  usesname: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  websiteName: varchar({ length: 255 }),
  websiteNiche: varchar({ length: 255 }),
  userId: varchar({ length: 45 }).notNull(),

  ...metaTable,
});

export const targetsTableRelations = relations(
  targetsTable,
  ({ one, many }) => ({
    user: one(usersTable, {
      fields: [targetsTable.userId],
      references: [usersTable.id],
    }),
    posts: many(postsTable),
  })
);
