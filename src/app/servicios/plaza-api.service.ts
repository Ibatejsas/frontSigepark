import { Plaza } from './../modelo/plaza';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

//const urlBasePlazas = 'http://localhost:8080/api/plazas';
const urlBasePlazas = 'https://sigepark.herokuapp.com/api/plazas';

@Injectable({
  providedIn: 'root'
})
export class PlazaApiService {

  private message = new BehaviorSubject(20);
  public sharedMessage = this.message.asObservable();

  constructor(private http: HttpClient) {
  }

  getPlazasTotales(): Observable<number> {
    return this.http.get(urlBasePlazas)
    .pipe(
      map(respuesta => respuesta['page'] ? respuesta['page'].totalElements : 0)
    );
  }

  getPlazasOcupadas(): Observable<number> {
    return this.http.get<number>(urlBasePlazas + '/search/total-ocupado?ocupado=true');
  }

  getPlazas(): Observable<Plaza[]> {
    return this.http
      .get(urlBasePlazas)
      .pipe(
        map((respuesta) =>
          respuesta['_embedded'] ? respuesta['_embedded'].plaza : []
        )
      );
  }

  getSharedMessage() {
    return this.sharedMessage;
  }

  nextMessage(plazasTotales: number) {
    this.message.next(plazasTotales);
  }


  insertarPlazas(plaza: Plaza) {
    return this.http.post(urlBasePlazas, plaza)
      .pipe(tap(_ => { const plazasTotales = this.message.value + 1; this.nextMessage(plazasTotales); }
      ));
  }

  quitarPlazas(): Observable<Object> {
    return this.http.delete(`${urlBasePlazas}`)
      .pipe(tap(_ => { const plazasTotales = this.message.value - 1; this.nextMessage(plazasTotales); }
      ));
  }
}
