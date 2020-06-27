import { Component, OnInit } from '@angular/core';
import { TicketsApiService } from 'src/app/servicios/ticket-api.service';
import { Ticket } from './../../modelo/ticket';

@Component({
  selector: 'app-admin-historico',
  templateUrl: './admin-historico.component.html',
  styleUrls: ['./admin-historico.component.css']
})
export class AdminHistoricoComponent implements OnInit {


  config: any;
  collection = { count: 10, data: [] };

  constructor(private ticketsApiService : TicketsApiService) { }

  columns = ["Numero de Ticket","Matricula","Hora de entrada"];
  index = ["id", "matricula", "entrada"];
  ticketsNoPagados:Ticket[]=[];
  tickets: Ticket[]=[];
  selectedTicket:Ticket;





  ngOnInit(): void {


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