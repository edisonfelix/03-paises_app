import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private _apiUrl: string = 'https://restcountries.com/v3.1';

  get apiUrl() {
    return this._apiUrl;
  }

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = this._apiUrl + '/name/' + termino;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = this._apiUrl + '/capital/' + termino;
    return this.http.get<Country[]>(url);
  }

  getPaisPorId(id: string): Observable<Country[]> {
    const url = this._apiUrl + '/alpha/' + id;
    return this.http.get<Country[]>(url);
  }
}
