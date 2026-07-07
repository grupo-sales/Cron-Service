import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1782998784524 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE controle_cron (
                id INT NOT NULL AUTO_INCREMENT,
                ultima_execucao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (id)
            )    
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE controle_cron
        `)
    }

}
