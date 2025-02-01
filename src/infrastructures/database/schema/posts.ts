import {
  mysqlTable,
  varchar,
  uniqueIndex,
  index,
  text,
} from 'drizzle-orm/mysql-core';
import { metaTable } from '../columns';
import { relations } from 'drizzle-orm';
import { titlesTable } from './titles';
import { targetsTable } from './targets';

export const postsTable = mysqlTable(
  'posts',
  {
    id: varchar({ length: 45 }).notNull().primaryKey().unique(),
    title: varchar({ length: 255 }).notNull(),
    content: text().notNull(),
    titleId: varchar({ length: 45 }).notNull(),
    parentId: varchar({ length: 45 }),

    ...metaTable,
  },
  (table) => {
    return [
      uniqueIndex('index_id').on(table.id),
      index('index_title').on(table.title),
    ];
  }
);

export const postsTableRelations = relations(postsTable, ({ one, many }) => ({
  title: one(titlesTable, {
    fields: [postsTable.titleId],
    references: [titlesTable.id],
  }),
  parent: one(postsTable, {
    fields: [postsTable.parentId],
    references: [postsTable.id],
  }),
  targets: many(targetsTable),
}));
