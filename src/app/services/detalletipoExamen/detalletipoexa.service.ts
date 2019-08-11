import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DetalletipoexaService {
  
  private baseUrl = '/lab/detalle_tipoex';

  constructor(private http : HttpClient) { }

  getDetalleExa(id: number): Observable <Object>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDetalleExa(detalletipoExa: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, detalletipoExa);
  }

  updateDetalleExa(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteDetalleExa(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDetalleExaList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
