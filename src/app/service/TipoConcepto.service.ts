import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoConcepto } from '../model/TipoConcepto';

@Injectable({
  providedIn: 'root'
})


export class TipoConceptoService {

  constructor(private httpClient: HttpClient) {}
  
  readonly URL_API: string =
   'http://localhost:8080/tipoconcepto/listaTipoConcepto';

   getAll(): Observable<TipoConcepto[]> {
    return this.httpClient.get<TipoConcepto[]>(this.URL_API);
  }

}
