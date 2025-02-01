import { relations } from 'drizzle-orm';
import { mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { postsTable } from './posts';
import { metaTable } from '../columns';

export const titlesTable = mysqlTable('titles', {
  id: varchar({ length: 45 }).notNull().primaryKey().unique(),
  text: varchar({ length: 255 }).notNull(),
  topicId: varchar({ length: 45 }).notNull(),

  ...metaTable,
});

export const titlesTableRelations = relations(titlesTable, ({ one, many }) => ({
  topic: one(titlesTable, {
    fields: [titlesTable.topicId],
    references: [titlesTable.id],
  }),
  posts: many(postsTable),
}));
