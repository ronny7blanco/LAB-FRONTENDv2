import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HistorialExaService {

  private baseUrl = '/lab/detalle_exre';

  constructor(private http : HttpClient) { }

  getHistorial(id: number): Observable <Object>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createHistorial(historiales: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, historiales);
  }

  updateHistorial(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteHistorial(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getHistorialList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
