import { AppInfoService} from './../../servicios/app-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  appVersion: string;

  constructor(private appInfo: AppInfoService) { }

  //Version de apliacion importada de info-Service
  ngOnInit(): void {
    this.appVersion = this.appInfo.getVersion();
  }

}
