CREATE TABLE `topics` (
	`id` varchar(45) NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` text NOT NULL,
	`user_id` varchar(45) NOT NULL,
	CONSTRAINT `topics_id` PRIMARY KEY(`id`),
	CONSTRAINT `topics_id_unique` UNIQUE(`id`),
	CONSTRAINT `index_id` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE INDEX `index_title` ON `topics` (`title`);