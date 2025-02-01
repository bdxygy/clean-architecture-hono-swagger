import { mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { postsTable } from './posts';
import { targetsTable } from './targets';
import { relations } from 'drizzle-orm';
import { metaTable } from '../columns';

export const postsTargetsTable = mysqlTable('posts_targets', {
  postId: varchar({ length: 45 })
    .notNull()
    .references(() => postsTable.id),
  targetId: varchar({ length: 45 })
    .notNull()
    .references(() => targetsTable.id),

  ...metaTable,
});

export const postsTargetsTableRelations = relations(
  postsTargetsTable,
  ({ one }) => ({
    post: one(postsTable, {
      fields: [postsTargetsTable.postId],
      references: [postsTable.id],
    }),
    target: one(targetsTable, {
      fields: [postsTargetsTable.targetId],
      references: [targetsTable.id],
    }),
  })
);
