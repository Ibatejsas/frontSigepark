import { Component, OnInit } from '@angular/core';
import { PlazaApiService } from 'src/app/servicios/plaza-api.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})

export class AdminHomeComponent implements OnInit {
  plazasTotales: number;

  constructor(
    private plazasService: PlazaApiService) { }


  ngOnInit(): void {
    this.setPlazasTotales();
  }

  setPlazasTotales() {
    this.plazasService.getPlazasTotales().subscribe(plazas => this.plazasTotales = plazas);
  }

}
