import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initi1645918714960 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS account_id_seq;

-- Table Definition
CREATE TABLE "public"."account" (
    "id" int4 NOT NULL DEFAULT nextval('account_id_seq'::regclass),
    "name" varchar NOT NULL,
    "planLevel" int4 NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS company_id_seq;

-- Table Definition
CREATE TABLE "public"."company" (
    "id" int4 NOT NULL DEFAULT nextval('company_id_seq'::regclass),
    "name" varchar NOT NULL,
    "accessLevel" int4 NOT NULL,
    "relatedAccountId" int4,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS membership_id_seq;

-- Table Definition
CREATE TABLE "public"."membership" (
    "id" int4 NOT NULL DEFAULT nextval('membership_id_seq'::regclass),
    "accountEmailAddress" varchar NOT NULL,
    "accountPhoneNumber" varchar NOT NULL,
    "accountFax" varchar NOT NULL,
    "relatedUserId" int4,
    "relatedAccountId" int4,
    "relatedRoleId" int4,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS role_id_seq;

-- Table Definition
CREATE TABLE "public"."role" (
    "id" int4 NOT NULL DEFAULT nextval('role_id_seq'::regclass),
    "name" varchar NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS user_id_seq;

-- Table Definition
CREATE TABLE "public"."user" (
    "id" int4 NOT NULL DEFAULT nextval('user_id_seq'::regclass),
    "firstName" varchar NOT NULL,
    "lastName" varchar NOT NULL,
    "userName" varchar NOT NULL,
    "emailAddress" varchar NOT NULL,
    "passwordSalt" varchar NOT NULL,
    "passwordHash" varchar NOT NULL,
    "isActive" bool NOT NULL DEFAULT true,
    "relatedAccountId" int4,
    PRIMARY KEY ("id")
);

ALTER TABLE "public"."company" ADD FOREIGN KEY ("relatedAccountId") REFERENCES "public"."account"("id");
ALTER TABLE "public"."membership" ADD FOREIGN KEY ("relatedAccountId") REFERENCES "public"."account"("id");
ALTER TABLE "public"."membership" ADD FOREIGN KEY ("relatedUserId") REFERENCES "public"."user"("id");
ALTER TABLE "public"."membership" ADD FOREIGN KEY ("relatedRoleId") REFERENCES "public"."role"("id");
ALTER TABLE "public"."user" ADD FOREIGN KEY ("relatedAccountId") REFERENCES "public"."account"("id");
      `,
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post" RENAME COLUMN "name" TO "title"`,
    ); // reverts things made in "up" method
  }
}
