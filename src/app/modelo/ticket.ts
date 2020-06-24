import { Plaza } from './plaza';
import { Tarifa } from './tarifa';

export interface Ticket{
    id:number;
    matricula:string;
    pagado:boolean;
    entrada:Date;
    salida:Date;
    plaza:Plaza;
    tarifa:Tarifa;
}