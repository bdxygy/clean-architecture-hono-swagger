CREATE TABLE `users` (
	`id` varchar(45) NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`token` bigint NOT NULL DEFAULT 0,
	`invitation_token` varchar(10) NOT NULL,
	`is_invitation_token_used` int DEFAULT 0,
	`invited_by` varchar(45),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_id_unique` UNIQUE(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`),
	CONSTRAINT `users_invitationToken_unique` UNIQUE(`invitation_token`),
	CONSTRAINT `index_id` UNIQUE(`id`),
	CONSTRAINT `index_email` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE INDEX `index_name` ON `users` (`name`);