import { Ticket } from './../../modelo/ticket';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { TicketsApiService } from 'src/app/servicios/ticket-api.service';
import { PlazaApiService } from 'src/app/servicios/plaza-api.service';


@Component({
  selector: 'app-operacion-lista',
  templateUrl: './operacion-lista.component.html',
  styleUrls: ['./operacion-lista.component.css']
})
export class OperacionListaComponent implements OnInit {

  config: any;
  collection = { count: 10, data: [] };

  constructor(private ticketsApiService : TicketsApiService) { }

  columns = ["Numero de Ticket","Matricula","Hora de entrada"];
  index = ["id", "matricula", "entrada"];
  ticketsNoPagados:Ticket[]=[];
  tickets: Ticket[]=[];
  selectedTicket:Ticket;

  ngOnInit(): void{

    this.ticketsApiService.getTickets().subscribe(
      (response)=>
      {
        this.tickets = response;
      },
      (error)=>console.log(error)
    )


    this.ticketsApiService.getTicketNoPagados().subscribe(
      (response)=>
      {
        this.ticketsNoPagados = response;
      },
      (error)=>console.log(error)
    )




    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };

    }

    pageChanged(event){
      this.config.currentPage = event;
    }

    onSelect(ticket: Ticket): void {
      this.selectedTicket = ticket;
    }


  }


  

