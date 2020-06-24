import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarifa } from '../modelo/tarifa';

//const urlBaseTarifas = 'http://localhost:8080/api/tarifas';
const urlBaseTarifas = 'https://sigepark.herokuapp.com/api/tarifas';

@Injectable({
  providedIn: 'root'
})
export class TarifaApiService {

  constructor(private http: HttpClient) { }

  getTarifa(): Observable<Tarifa> {
    return null;
  }

}
