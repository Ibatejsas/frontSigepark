import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RouterModule, Routes } from '@angular/router';
import { ComunModule } from '../comun/comun.module';
import { AdminPlazasComponent } from './admin-plazas/admin-plazas.component';
import { AdminHistoricoComponent } from './admin-historico/admin-historico.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent
  },
  {
    path: 'plazas',
    component: AdminPlazasComponent
  },
  {
    path: 'historico',
    component: AdminHistoricoComponent
  }

];

@NgModule({
  declarations: [AdminHomeComponent, AdminPlazasComponent, AdminHistoricoComponent],
  imports: [
    CommonModule,
    ComunModule,
    RouterModule.forChild(routes)
  ]
})
export class AdministracionModule { }
