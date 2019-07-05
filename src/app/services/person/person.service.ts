import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseUrl = '/lab/personas';

  constructor(private http: HttpClient) { }

  getPerson(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPersona(person: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, person);
  }

  updatePersona(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePersona(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPersonasList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
