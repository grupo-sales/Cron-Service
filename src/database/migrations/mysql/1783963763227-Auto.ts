import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1783963763227 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE pedido_rastreamento
            MODIFY COLUMN ultimaEtapaEmail ENUM(
                'recebido',
                'nota_fiscal',
                'em_separacao',
                'saiu_para_entrega',
                'pronto_para_retirada',
                'entregue',
                'retirado',
                'cancelada'
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE pedido_rastreamento
            MODIFY COLUMN ultimaEtapaEmail ENUM(
                'recebido',
                'nota_fiscal',
                'em_separacao',
                'saiu_para_entrega',
                'pronto_para_retirada',
                'entregue',
                'retirado'
            );
        `);
    }

}
