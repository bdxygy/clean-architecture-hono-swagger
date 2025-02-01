CREATE TABLE `titles` (
	`id` varchar(45) NOT NULL,
	`text` varchar(255) NOT NULL,
	`topic_id` varchar(45) NOT NULL,
	CONSTRAINT `titles_id` PRIMARY KEY(`id`),
	CONSTRAINT `titles_id_unique` UNIQUE(`id`)
);
--> statement-breakpoint
ALTER TABLE `topics` ADD `created_at` timestamp DEFAULT (now()) NOT NULL;--> statement-breakpoint
ALTER TABLE `topics` ADD `updated_at` timestamp DEFAULT (now()) NOT NULL ON UPDATE CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `topics` ADD `deleted_at` timestamp;