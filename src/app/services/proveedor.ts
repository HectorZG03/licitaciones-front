import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProveedorModel {
  id?: number;
  nombrePersonaFisica?: string;
  rfc: string;
  razonSocial?: string;
  telefonos: string;
  correo: string;
  repLegalNombre?: string;
  repLegalCargo?: string;
  repLegalRfc?: string;
  repLegalDomicilio?: string;
  domCalleNumero: string;
  domColonia: string;
  domMunicipio: string;
  domCp: string;
  domEstado: string;
  padronNumCedula?: string;
  padronVigencia?: string;
  padronRubros?: string;
  actaNumero?: string;
  actaFecha?: string;
  actaNotarioNombre?: string;
  actaNotariaNumero?: string;
  reformasNumero?: string;
  reformasFecha?: string;
  accionistas?: string;
}

@Injectable({
  providedIn: 'root',
})
export class Proveedor {
  private readonly API = 'http://localhost:9090/proveedores';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ProveedorModel[]> {
    return this.http.get<ProveedorModel[]>(this.API);
  }

  getById(id: number): Observable<ProveedorModel> {
    return this.http.get<ProveedorModel>(`${this.API}/${id}`);
  }

  create(proveedor: ProveedorModel): Observable<ProveedorModel> {
    return this.http.post<ProveedorModel>(this.API, proveedor);
  }

  update(id: number, proveedor: ProveedorModel): Observable<ProveedorModel> {
    return this.http.put<ProveedorModel>(`${this.API}/${id}`, proveedor);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }
}