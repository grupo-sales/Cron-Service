import { AppDataSource } from "../data-source";
import { ControleCron } from "../entities/mysql/ControleCron";

export const ControleCronRepository = AppDataSource.getRepository(ControleCron).extend({

    lastAtualizacao(){
        return this.findOneBy({ id: 1 });
    },

    updateTime(){
        return this.update(1, { ultima_execucao: new Date() });
    }

});