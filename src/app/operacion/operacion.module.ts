import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperacionHomeComponent } from './operacion-home/operacion-home.component';
import { OperacionListaComponent } from './operacion-lista/operacion-lista.component';
import { OperacionTicketComponent } from './operacion-ticket/operacion-ticket.component';
import { Routes, RouterModule } from '@angular/router';
import { ComunModule } from '../comun/comun.module';


const routes: Routes = [
  {
    path: '',
    component: OperacionHomeComponent
  },
  {
    path: 'plazas',
    component: OperacionListaComponent
  },
  {
    path: 'tickets',
    component: OperacionTicketComponent
  }

];

@NgModule({
  declarations: [OperacionHomeComponent, OperacionListaComponent, OperacionTicketComponent],
  imports: [
    CommonModule,
    ComunModule,
    RouterModule.forChild(routes)
  ]
})
export class OperacionModule { }
