CREATE TABLE `posts` (
	`id` varchar(45) NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` text NOT NULL,
	`title_id` varchar(45) NOT NULL,
	`parent_id` varchar(45),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `posts_id` PRIMARY KEY(`id`),
	CONSTRAINT `posts_id_unique` UNIQUE(`id`),
	CONSTRAINT `index_id` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE INDEX `index_title` ON `posts` (`title`);