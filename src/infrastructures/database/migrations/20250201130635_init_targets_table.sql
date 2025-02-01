CREATE TABLE `targets` (
	`id` varchar(45) NOT NULL,
	`domain` varchar(255) NOT NULL,
	`usesname` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`website_name` varchar(255),
	`website_niche` varchar(255),
	`user_id` varchar(45) NOT NULL,
	CONSTRAINT `targets_id` PRIMARY KEY(`id`),
	CONSTRAINT `targets_id_unique` UNIQUE(`id`)
);
