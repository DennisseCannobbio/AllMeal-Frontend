import { Component } from '@angular/core';
import { SlackService } from '../slack.service';
import { lastValueFrom } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-user-responses',
  templateUrl: './user-responses.component.html',
  styleUrl: './user-responses.component.scss'
})
export class UserResponsesComponent {

  lstRespuestas: any[] = [];
  cargando: boolean = undefined;

  constructor(
    private slackService: SlackService
  ){

  }

  ngOnInit(): void {
    this.listarRespuestas();

  }

  async listarRespuestas(){
    this.cargando = true;
    let respuestas$ = this.slackService.listarRespuestas();

    let res: any = await lastValueFrom(respuestas$);

    if(res.Ok == true) {
      this.lstRespuestas = res.data;

      this.lstRespuestas.forEach(item => {
        item.fechaStr = moment(item.created_at).format('DD-MM-YYYY')
      })
      console.log(this.lstRespuestas)

      this.cargando = false;
    } else {
      this.lstRespuestas = [];
      this.cargando = false;

    }
  }
}
