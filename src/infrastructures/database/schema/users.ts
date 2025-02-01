import {
  bigint,
  index,
  int,
  mysqlTable,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/mysql-core';
import { metaTable } from '../columns';
import { relations } from 'drizzle-orm';
import { topicsTable } from './topics';

export const usersTable = mysqlTable(
  'users',
  {
    id: varchar({ length: 45 }).notNull().primaryKey().unique(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
    token: bigint({ mode: 'number' }).notNull().default(0),
    invitationToken: varchar({ length: 10 }).notNull().unique(),
    isInvitationTokenUsed: int().default(0),
    invitedBy: varchar({ length: 45 }),

    ...metaTable,
  },
  (table) => {
    return [
      uniqueIndex('index_id').on(table.id),
      uniqueIndex('index_email').on(table.email),
      index('index_name').on(table.name),
    ];
  }
);

export const usersTableRelations = relations(usersTable, ({ one, many }) => ({
  invitee: one(usersTable, {
    fields: [usersTable.invitedBy],
    references: [usersTable.id],
  }),
  topics: many(topicsTable),
}));
