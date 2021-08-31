import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Desenvolvedor } from '../models/Desenvolvedor';

@Injectable({
  providedIn: 'root'
})
export class DesenvolvedoresServices {

  baseUrl = `${environment.baseUrl}/api/dev`;

  constructor(private http: HttpClient) { }

  getAll(): Observable <Desenvolvedor[]>{
    return this.http.get<Desenvolvedor[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable <Desenvolvedor>{
    return this.http.get<Desenvolvedor>(`${this.baseUrl}/${id}`);
  }
  post (dev: Desenvolvedor){
    return this.http.post(`${this.baseUrl}`,dev);
  }
  put(id: number, dev:Desenvolvedor){
    return this.http.put(`${this.baseUrl}/${id}`,dev);
  }

  delete(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
