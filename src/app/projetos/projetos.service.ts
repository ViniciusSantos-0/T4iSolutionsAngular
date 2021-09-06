import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projeto } from '../models/Projeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  baseUrl = `${environment.baseUrl}/api/projeto`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Projeto[]>{
    return this.http.get<Projeto[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Projeto>{
    return this.http.get<Projeto>(`${this.baseUrl}/${id}`);
  }

  getByWorksById(id: number): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(`${this.baseUrl}/works/${id}`);
  }
  post(projeto: Projeto){
    return this.http.post(`${this.baseUrl}`,projeto);
  }
  put( projeto: Projeto){
    return this.http.put(`${this.baseUrl}/${projeto.id}`,projeto);
  }

  delete(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
