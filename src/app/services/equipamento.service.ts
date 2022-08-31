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

  public postSalas(boydEquipamento:Equipamento):Observable<Equipamento> {
      return this.http.post<Equipamento>(url,boydEquipamento);
  }

  public putSalas(id:number,boydEquipamento:Equipamento) {
    this.http.put<Equipamento>(url+id,boydEquipamento)
  }

  public delete(id:number){
    this.http.delete<Equipamento>(url+id)
  }

  public getSalasbyId(id:number): Observable<Equipamento> {
    return this.http.get<Equipamento>(url+id);
  }

  public getSalas():Observable<Equipamento> {
    return this.http.get<Equipamento>(url);
  }




}
