import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, take,filter,map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Equipamento } from '../../../interfaces/equipamento';

@Injectable()

export class EquipamentoService {

  private readonly API = `${environment.API}equipamentos/`
  private equipamento$ = new BehaviorSubject<Equipamento[]>([])  // salvando localmente para não fazer novas requisições sem necessidade

  get listequipament(): Observable<Equipamento[]>{
      return this.equipamento$.asObservable()
  }
  public listequipamentByID(id:number): Observable<Equipamento[]>{
      return this.equipamento$.asObservable().pipe(
        map(equilist => equilist.filter(equi=> equi.id == id).slice(0,1))
        )
  }

  set listequipament$(value : Equipamento[]){
    this.equipamento$.next(value);
  }

  constructor(private http: HttpClient) { }

  public postEquipamento(boydEquipamento:Equipamento):Observable<Equipamento> {
      return this.http.post<Equipamento>(this.API,boydEquipamento);
  }

  public putEquipamento(boydEquipamento:Equipamento) {
    this.http.put<Equipamento>(this.API+boydEquipamento.id,boydEquipamento)
  }

  public delete(id:number){
    this.http.delete<Equipamento>(this.API+id)
  }

  public getEquipamentobyId(id:number): Observable<Equipamento> {
    return this.http.get<Equipamento>(this.API+id).pipe(first());
  }

  public getEquipamento():Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(this.API).pipe(first()); //pega a primeira reposta do servidor para o oberservable
  }




}
