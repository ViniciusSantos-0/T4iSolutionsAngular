import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Desenvolvedor } from '../models/Desenvolvedor';
import { Projeto } from '../models/Projeto';

@Injectable({
  providedIn: 'root'
})
export class DesenvolvedoresServices {

  baseUrl = `${environment.baseUrl}/api/dev`;

  constructor(private http: HttpClient) { }

  getAll(): Observable <Desenvolvedor[]>{
    return this.http.get<Desenvolvedor[]>(`${this.baseUrl}`);
  }

  getProjetoById(id: number): Observable <Desenvolvedor[]>{
    return this.http.get<Desenvolvedor[]>(`${this.baseUrl}/byprojeto/${id}`);
  }

  getById(id: number): Observable <Desenvolvedor>{
    return this.http.get<Desenvolvedor>(`${this.baseUrl}/${id}`);
  }
  post (dev: Desenvolvedor){
    return this.http.post(`${this.baseUrl}`,dev);
  }
  put(dev:Desenvolvedor){
    return this.http.put(`${this.baseUrl}/${dev.id}`,dev);
  }

  delete(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
