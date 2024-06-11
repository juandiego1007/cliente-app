import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Cliente {
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  telefono: string;
  direccion: string;
  ciudadResidencia: { nombre: string };
}

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  private baseUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) { }

  getCliente(tipoDocumento: string, numeroDocumento: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/cliente?tipoDocumento=${tipoDocumento}&numeroDocumento=${numeroDocumento}`);
  }

}
