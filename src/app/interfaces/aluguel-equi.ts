import { Equipamento } from "./equipamento";

export interface AluguelEqui {
    name:string;
    id:number;
    email:string;
    solicitacao:Date;
    devolucao:Date;
    tempoDeUso:number;
    equipamento:Equipamento;
}
