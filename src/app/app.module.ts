import { TicketFilterService } from './servicios/ticket-filter.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ComunModule } from './comun/comun.module';
import { AdministracionModule } from './administracion/administracion.module';
import { OperacionModule } from './operacion/operacion.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    TicketFilterService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComunModule,
    AdministracionModule,
    OperacionModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
