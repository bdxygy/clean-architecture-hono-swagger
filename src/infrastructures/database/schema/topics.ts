import { relations } from 'drizzle-orm';
import {
  index,
  mysqlTable,
  text,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/mysql-core';
import { usersTable } from './users';
import { metaTable } from '../columns';
import { titlesTable } from './titles';

export const topicsTable = mysqlTable(
  'topics',
  {
    id: varchar({ length: 45 }).notNull().primaryKey().unique(),
    title: varchar({ length: 255 }).notNull(),
    content: text().notNull(),
    userId: varchar({ length: 45 }).notNull(),

    ...metaTable,
  },
  (table) => {
    return [
      uniqueIndex('index_id').on(table.id),
      index('index_title').on(table.title),
    ];
  }
);

export const topicsTableRelations = relations(topicsTable, ({ one, many }) => ({
  user: one(usersTable, {
    fields: [topicsTable.userId],
    references: [usersTable.id],
  }),
  titles: many(titlesTable),
}));
