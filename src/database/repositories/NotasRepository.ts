import { AppDataSource } from "../data-source";
import { VNota } from "../entities/mysql/VNota";

export const NotasRepository = AppDataSource.getRepository(VNota).extend({

    findNota(idNota: string, idFilial: number) {
        return this.findOne({ where: { id: idNota, idFilial: idFilial } });
    },

});