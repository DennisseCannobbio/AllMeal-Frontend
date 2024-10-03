import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { PedidosService } from '../pages/pedidos/pedidos.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertaService {

  horarioPedido: boolean = true;
  lstPedidos: any[] = [];

  constructor(
    private pedidosService: PedidosService
  ) { }

  async iniciarAlerta() {

    this.checkTime();

    await this.listarPedidos();

    setInterval(() => {
      if (this.horarioPedido && this.lstPedidos.length === 0) {
        Swal.fire({
          title: 'Atención!',
          text: 'No ha realizado pedidos dentro de la hora especificada, por favor ingrese sus pedidos.',
          icon: 'warning',
          confirmButtonText: 'Aceptar',
          showCancelButton: false
        });
      }
    }, 60000);
  }

  // !Con esto validamos que los pedidos se realicen entre 10 y 11 AM, el boton quedará siempre habilitado para funcionalidad.
  checkTime(){
      let currentTime = new Date();
      let currentHour = currentTime.getHours();
      let currentMinutes = currentTime.getMinutes();

      // ! Deje esta linea solo para probar la funcionalidad, en la realidad se debe eliminar esta linea.
      this.horarioPedido = true;

      // ! Comentare esta parte para que horarioPedido == true siempre, solo para probar la funcionalidad, en la realidad este codigo debe estar descomentado

      // if (currentHour === 10 && currentMinutes >= 0 && currentMinutes < 60) {
      //   this.horarioPedido = true;
      // } else {
      //   this.horarioPedido = false;
      // }
  }

  async listarPedidos() {
    try {
      const menus$ = this.pedidosService.listarPedidos();
      const res: any = await lastValueFrom(menus$);

      if (res.Ok === true) {
        this.lstPedidos = res.data;
      } else {
        this.lstPedidos = [];
      }
    } catch (error) {
      console.error('Error al listar pedidos:', error);
      this.lstPedidos = [];
    }
  }


}
