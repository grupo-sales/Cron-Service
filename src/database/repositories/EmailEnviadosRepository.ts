import { DeepPartial } from "typeorm";
import { PostgresDataSource } from "../data-source-postgres";
import { EmailEnviado } from "../entities/postgres/EmailEnviados";

export const EmailEnviadosRepository =
  PostgresDataSource.getRepository(EmailEnviado).extend({

    async salvar(data: DeepPartial<EmailEnviado>) {
      return this.save(data);
    }

  });