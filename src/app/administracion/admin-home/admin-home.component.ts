import { Plaza } from './../../modelo/plaza';
import { Component, OnInit } from '@angular/core';
import { PlazaApiService } from 'src/app/servicios/plaza-api.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  plazasTotales: number = 20;

  constructor(
    private plazasService: PlazaApiService) { }

  addPlaza(): void {
    const plaza: Plaza = { ocupado: false, id: null };
    //this.plazasService.insertarPlazas(plaza).subscribe(respuesta => console.log("plazaAñadida"))

    this.plazasService.insertarPlazas(plaza).subscribe(() => {
      this.setPlazasTotales();
    });

  }

  delPlaza(): void {
    //this.plazasService.quitarPlazas().subscribe(respuesta => console.log("plazaeliminada"))

    this.plazasService.quitarPlazas().subscribe(() => {
      this.setPlazasTotales();
    });
  }


  ngOnInit(): void {

    //this.plazasService.getSharedMessage().subscribe(plazasTotales => this.plazasTotales = plazasTotales);

    this.setPlazasTotales();

  }

  setPlazasTotales() {
    this.plazasService.getPlazasTotales().subscribe(plazas => this.plazasTotales = plazas);
  }

}
