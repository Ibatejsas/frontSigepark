import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInfoService {

  private appVersion = "0.0.1"

  constructor() { }
// suministra la version de la aplicación
  getVersion(){
    return this.appVersion;
  }
}
