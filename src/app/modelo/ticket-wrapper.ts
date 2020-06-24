
export interface TicketWrapper {
    id: number;
    matricula: string;
    pagado: boolean;
    entrada: Date;
    salida: Date;
    _links: {
        self: {
            href: string
        },
        ticket: {
            href: string
        },
        plaza: {
            href: string
        },
        tarifa: {
            href: string
        },
    };
}
