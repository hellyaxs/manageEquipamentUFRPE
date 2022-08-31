import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipamento } from '../interfaces/equipamento';

const url ="http://localhost:8082/equipamento/";

@Injectable({
  providedIn: 'root'
})

export class EquipamentoService {
 
  constructor(private http: HttpClient) { }

  public postEquipamento(boydEquipamento:Equipamento):Observable<Equipamento> {
      return this.http.post<Equipamento>(url,boydEquipamento);
  }

  public putEquipamento(id:number,boydEquipamento:Equipamento) {
    this.http.put<Equipamento>(url+id,boydEquipamento)
  }

  public delete(id:number){
    this.http.delete<Equipamento>(url+id)
  }

  public getEquipamentobyId(id:number): Observable<Equipamento> {
    return this.http.get<Equipamento>(url+id);
  }

  public getEquipamento():Observable<Equipamento> {
    return this.http.get<Equipamento>(url);
  }




}
