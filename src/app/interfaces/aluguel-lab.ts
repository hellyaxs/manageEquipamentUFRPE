import { Laboratorio } from "./laboratorio";

export interface AluguelLab {
    name:string;
    id:number;
    email:string;
    solicitacao:Date;
    devolucao:Date;
    tempoDeUso:number;
    laboratorio:Laboratorio

}
