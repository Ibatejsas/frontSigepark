import { Ticket } from './../modelo/ticket';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { TicketWrapper } from '../modelo/ticket-wrapper';
import { Tarifa } from '../modelo/tarifa';
import { Plaza } from '../modelo/plaza';

//const urlBaseTickets = 'http://localhost:8080/api/tickets';
const urlBaseTickets = 'https://sigepark.herokuapp.com/api/tickets';

@Injectable({
  providedIn: 'root',
})
export class TicketsApiService {
  private messageOcupadas = new BehaviorSubject(0);
  public sharedMessageOcupadas = this.messageOcupadas.asObservable();

  constructor(private http: HttpClient) {}

  getTarifa(url): Observable<Tarifa> {
    return this.http.get<Tarifa>(url);
  }

  getPlaza(url): Observable<Plaza> {
    return this.http.get<Plaza>(url);
  }

  getTickets(): Observable<Ticket[]> {
    return this.http
      .get(urlBaseTickets)
      .pipe(
        map((respuesta) =>
          respuesta['_embedded'] ? respuesta['_embedded'].tickets : []
        )
      );
  }

  getTicketNoPagados(): Observable<Ticket[]> {
    return this.http
      .get<Ticket[]>(urlBaseTickets + '/search/por-pagado?pagado=false')
      .pipe(
        map((respuesta) =>
          respuesta['_embedded'] ? respuesta['_embedded'].tickets : []
        )
      );
  }

  crearTicket(matricula: string): Observable<TicketWrapper> {
    return this.http
      .post<TicketWrapper>(urlBaseTickets, { matricula })
      .pipe(
        tap((_) => {
          const plazasOcupadas = this.messageOcupadas.value + 1;
          this.nextMessageOcupadas(plazasOcupadas);
        })
      );
  }

  pagarTicket(id: number): Observable<TicketWrapper> {
    return this.http.patch<TicketWrapper>(`${urlBaseTickets}/${id}`, null).pipe(
      tap((_) => {
        const plazasOcupadas = this.messageOcupadas.value - 1;
        this.nextMessageOcupadas(plazasOcupadas);
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          alert('Mensaje desde el Observable: Ticket no encontrado');
        } else {
          alert(
            'Mensaje desde el Observable: Error inesperado: ' + error.message
          );
        }
        return [];
      })
    );
  }

  getSharedMessageOcupadas() {
    return this.sharedMessageOcupadas;
  }

  nextMessageOcupadas(plazasOcupadas: number) {
    this.messageOcupadas.next(plazasOcupadas);
  }
}
