import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root',
})
export class MenusService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
  }

  listarMenus() {
    return this.http.get(
      `${base_url}/menus`,
    );
  }

  agregarMenu(entrada: string, platoFondo: string, postre: string, fecha: any){
    return this.http.post(`${base_url}/menus/create`, {
      entrada: entrada,
      plato_fondo: platoFondo,
      postre: postre,
      fecha: fecha
    })
  }

  modificarMenu(id: number, entrada: string, platoFondo: string, postre: string, fecha: any) {
    return this.http.put(`${base_url}/menus/${id}`, {
      entrada: entrada,
      plato_fondo: platoFondo,
      postre: postre,
      fecha: fecha
    })
  }

  eliminarMenu(id: number){
    return this.http.delete(`${base_url}/menus/${id}`)
  }

}
