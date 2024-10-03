import { Component } from '@angular/core';
import { AlertaService } from './services/alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private alertaService: AlertaService,

  ){

  }

  ngOnInit() {
    this.alertaService.iniciarAlerta();
  }


}
