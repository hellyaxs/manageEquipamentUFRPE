import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Equipamento } from '../interfaces/equipamento';

@Injectable({
  providedIn: 'root'
})

export class EquipamentoService {

  private readonly API = `${environment.API}equipamentos/`
 
  constructor(private http: HttpClient) { }

  public postEquipamento(boydEquipamento:Equipamento):Observable<Equipamento> {
      return this.http.post<Equipamento>(this.API,boydEquipamento);
  }

  public putEquipamento(id:number,boydEquipamento:Equipamento) {
    this.http.put<Equipamento>(this.API+id,boydEquipamento)
  }

  public delete(id:number){
    this.http.delete<Equipamento>(this.API+id)
  }

  public getEquipamentobyId(id:number): Observable<Equipamento> {
    return this.http.get<Equipamento>(this.API+id);
  }

  public getEquipamento():Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(this.API);
  }




}
