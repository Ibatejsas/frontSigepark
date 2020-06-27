import { Plaza } from './../../modelo/plaza';
import { Component, OnInit } from '@angular/core';
import { PlazaApiService } from 'src/app/servicios/plaza-api.service';

@Component({
  selector: 'app-admin-plazas',
  templateUrl: './admin-plazas.component.html',
  styleUrls: ['./admin-plazas.component.css']
})

export class AdminPlazasComponent implements OnInit {
  plazasTotales: number;
  plazasOcupadas: number;

  constructor(
    private plazasService: PlazaApiService) { }

  //llamamos a plazas totales y plazas ocupadas
  ngOnInit(): void {
    this.setPlazasTotales();
    this.setPlazasOcupadas();
  }

  setPlazasTotales() {
    this.plazasService.getPlazasTotales().subscribe(plazas => this.plazasTotales = plazas);
  }

  setPlazasOcupadas() {
    return this.plazasService
      .getPlazasOcupadas()
      .subscribe((plazas) => (this.plazasOcupadas = plazas));
  }

  addPlaza(): void {
    const plaza: Plaza = { ocupado: false, id: null };
    this.plazasService.insertarPlazas(plaza).subscribe(() => {
      this.setPlazasTotales();
    });

  }

  delPlaza(): void {
    this.plazasService.quitarPlazas().subscribe(() => {
      this.setPlazasTotales();
    });
  }

}
