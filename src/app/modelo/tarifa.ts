
export interface Tarifa {
    factor: string;
    factorTiempo: FactorTiempo;
    tipo: Tipo;
}

export enum FactorTiempo {
    MINUTO = 'MINUTO',
    HORA = 'HORA'
}

export enum Tipo {
    NORMAL = 'NORMAL',
    FIN_SEMANA = 'FIN_SEMANA'
}

