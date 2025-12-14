CREATE TABLE "project_tech" (
	"project_id" text NOT NULL,
	"tech_id" text NOT NULL,
	CONSTRAINT "project_tech_project_id_tech_id_pk" PRIMARY KEY("project_id","tech_id")
);
