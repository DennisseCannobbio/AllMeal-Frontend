import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root',
})
export class SlackService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
  }

  enviarMenu() {
    return this.http.get(
      `${base_url}/slack/sendmenu`,
    );
  }

  listarRespuestas(){
    return this.http.get(
      `${base_url}/slack/get_responses`,
    );
  }

}
