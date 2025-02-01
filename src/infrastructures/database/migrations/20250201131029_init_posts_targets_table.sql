CREATE TABLE `posts_targets` (
	`post_id` varchar(45) NOT NULL,
	`target_id` varchar(45) NOT NULL
);
--> statement-breakpoint
ALTER TABLE `posts_targets` ADD CONSTRAINT `posts_targets_post_id_posts_id_fk` FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `posts_targets` ADD CONSTRAINT `posts_targets_target_id_targets_id_fk` FOREIGN KEY (`target_id`) REFERENCES `targets`(`id`) ON DELETE no action ON UPDATE no action;