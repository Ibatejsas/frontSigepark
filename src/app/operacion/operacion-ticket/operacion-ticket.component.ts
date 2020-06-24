import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TicketsApiService } from 'src/app/servicios/ticket-api.service';
import { PlazaApiService } from 'src/app/servicios/plaza-api.service';
import { TicketWrapper } from 'src/app/modelo/ticket-wrapper';
import { Tarifa, FactorTiempo } from 'src/app/modelo/tarifa';
import { Plaza } from 'src/app/modelo/plaza';
declare var $: any;

@Component({
  selector: 'app-operacion-ticket',
  templateUrl: './operacion-ticket.component.html',
  styleUrls: ['./operacion-ticket.component.css'],
})
export class OperacionTicketComponent implements OnInit {
  plazasTotales: number;
  plazasOcupadas: number;

  newTicketForm = this.fb.group({
    matricula: ['', Validators.required],
  });

  payTicketForm = this.fb.group({
    numeroTicket: ['', Validators.required],
  });

  ticket: TicketWrapper;
  tarifa: Tarifa;
  plaza: Plaza;
  showFactura = false;
  importe: number;
  factorTiempo: string;

  constructor(
    private fb: FormBuilder,
    private ticketApiService: TicketsApiService,
    private plazasApiService: PlazaApiService
  ) {}

  //llamamos a plazas totales y plazas ocupadas
  ngOnInit(): void {
    //this.plazasApiService.getSharedMessage().subscribe(plazasTotales => this.plazasTotales = plazasTotales);
    //this.ticketApiService.getSharedMessageOcupadas().subscribe(plazasOcupadas => this.plazasOcupadas = plazasOcupadas);

    this.setPlazasTotales();
    this.setPlazasOcupadas();
  }

  //no viene plaza o tarifa
  crearTicket() {
    this.ticketApiService
      .crearTicket(this.newTicketForm.value.matricula)
      .subscribe(
        (resultado) => {
          this.ticket = resultado; //ya tenemos el ticket
          this.setPlazasOcupadas();

          //el link esta definido de padres a hijos
          this.ticketApiService
            .getTarifa(resultado._links.tarifa.href)
            .subscribe((tarifa) => {
              this.tarifa = tarifa;
              this.factorTiempo = this.tarifa.factorTiempo.toLowerCase();
              $('#modalTicket').modal('show');
            });
        },
        (error) => {
          alert('La matricula ya existe');
        }
      );
  }

  pagarTicket() {
    console.log(this.payTicketForm.value); // ver valor por consola
    this.ticketApiService
      .pagarTicket(this.payTicketForm.value.numeroTicket)
      .subscribe((resultado) => {
        //el .value devuelve un json con los controlname
        this.ticket = resultado;
        this.setPlazasOcupadas();
        this.setPlazasTotales();
        this.ticketApiService
          .getTarifa(resultado._links.tarifa.href)
          .subscribe((tarifa) => {
            this.tarifa = tarifa;
            this.importe = this.calcularImporte();
            this.factorTiempo = this.tarifa.factorTiempo.toLowerCase();
            this.showFactura = true;
            $('#modalFactura').modal('show');
          });
      });
  }

  setPlazasTotales() {
    return this.plazasApiService
      .getPlazasTotales()
      .subscribe((plazas) => (this.plazasTotales = plazas));
  }

  setPlazasOcupadas() {
    return this.plazasApiService
      .getPlazasOcupadas()
      .subscribe((plazas) => (this.plazasOcupadas = plazas));
  }

  calcularImporte() {
    const entrada = new Date(this.ticket.entrada);
    const salida = new Date(this.ticket.salida);
    let tiempo: number;

    if (this.tarifa.factorTiempo === FactorTiempo.MINUTO) {
      tiempo = (salida.getTime() - entrada.getTime()) / (60 * 1000); //minutos
    } else {
      tiempo = (salida.getTime() - entrada.getTime()) / (60 * 60 * 1000); //horas
    }

    return tiempo * Number(this.tarifa.factor);
  }
}
