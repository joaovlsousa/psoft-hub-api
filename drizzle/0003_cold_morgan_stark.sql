ALTER TABLE "users" DROP CONSTRAINT "users_email_unique";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "github_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "github_hashed_access_token" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "email";--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_githubId_unique" UNIQUE("github_id");