import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1794355200000 implements MigrationInterface {
  name = 'CreateUsers1794355200000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE users (
        id VARCHAR(36) NOT NULL,

        firstName VARCHAR(100) NOT NULL,

        lastName VARCHAR(100) NOT NULL,

        email VARCHAR(254) NOT NULL,

        passwordHash VARCHAR(255) NOT NULL,

        isActive TINYINT NOT NULL DEFAULT 1,

        createdAt DATETIME(6) NOT NULL
          DEFAULT CURRENT_TIMESTAMP(6),

        updatedAt DATETIME(6) NOT NULL
          DEFAULT CURRENT_TIMESTAMP(6)
          ON UPDATE CURRENT_TIMESTAMP(6),

        CONSTRAINT UQ_users_email UNIQUE (email),

        PRIMARY KEY (id)
      )
      ENGINE=InnoDB
      DEFAULT CHARSET=utf8mb4
      COLLATE=utf8mb4_unicode_ci;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE users;
    `);
  }
}
