import { Component } from '@angular/core';
import { SlackService } from '../slack.service';
import { lastValueFrom } from 'rxjs';
import Swal from 'sweetalert2';
import { MenusService } from '../../menus/menus.service';

@Component({
  selector: 'app-enviar-menu',
  templateUrl: './enviar-menu.component.html',
  styleUrl: './enviar-menu.component.scss'
})
export class EnviarMenuComponent {
  lstMenus: any[] = [];
  cargando: boolean = true;

  constructor(
    private slackService: SlackService,
    private menusService: MenusService
  ){

  }

  ngOnInit() {
    this.listarMenus();
  }

  enviarMenu(){

    Swal.fire({
      title: '¿Está seguro/a?',
      text: 'Se enviará el/los menú/s hacia su canal de Slack',
      icon: 'question',
      confirmButtonText: 'Aceptar',
      showCancelButton: true,
      cancelButtonText: 'Cancelar'
    })
    .then(async (r) => {
      if(r.isConfirmed) {

        let enviarMenu$ = this.slackService.enviarMenu();

        let res: any = await lastValueFrom(enviarMenu$);

        console.log(res);

        if(res.Ok == true) {
          Swal.fire({
            title: '¡Éxito!',
            text: `Se han enviado el/los menú/s, por favor revise su canal de Slack.`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            showCancelButton: false,
          })
        }
      } else {
        Swal.fire('Operación Cancelada', 'No se han realizado cambios.', 'error');
      }
    })

  }

  async listarMenus(){
    this.cargando = true;
    let menus$ = this.menusService.listarMenus();

    let [menusRes]: [any] = await Promise.all([lastValueFrom(menus$)]);

    if (menusRes.Ok == true) {
      this.lstMenus = menusRes.data;

      this.cargando = false;
    } else {
      this.lstMenus = [];
      this.cargando = false;
    }

  }
}
