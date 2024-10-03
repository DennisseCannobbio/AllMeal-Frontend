import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
  }

  listarPedidos() {
    return this.http.get(
      `${base_url}/pedidos`,
    );
  }

  agregarPedido(cliente: string, menus: any, fecha: any){
    return this.http.post(`${base_url}/pedidos/create`, {
      nombre_cliente: cliente,
      menus: menus,
      fecha: fecha
    })
  }

  modificarPedido(id: number, cliente: string, menus: any, fecha: any) {
    return this.http.put(`${base_url}/pedidos/${id}`, {
      nombre_cliente: cliente,
      menus: menus,
      fecha: fecha
    })
  }

  eliminarPedido(id: number){
    return this.http.delete(`${base_url}/pedidos/${id}`)
  }

}
