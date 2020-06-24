import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RouterModule, Routes } from '@angular/router';
import { ComunModule } from '../comun/comun.module';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent
  },

];

@NgModule({
  declarations: [AdminHomeComponent],
  imports: [
    CommonModule,
    ComunModule,
    RouterModule.forChild(routes)
  ]
})
export class AdministracionModule { }
