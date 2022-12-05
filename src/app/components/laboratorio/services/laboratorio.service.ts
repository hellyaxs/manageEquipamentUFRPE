import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { first, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Laboratorio } from '../../../interfaces/laboratorio';

@Injectable()
export class LaboratorioService {

  constructor(private http:HttpClient) { }

  private readonly API = `${environment.API}laboratorios/`


  public postLaboratorio(boydEquipamento:Laboratorio):Observable<Laboratorio> {
      return this.http.post<Laboratorio>(this.API,boydEquipamento);

  }

  public putLaboratorio(boydLaboratorios:Laboratorio) {
    this.http.put<Laboratorio>(this.API+boydLaboratorios.id,boydLaboratorios)
  }

  public delete(id:number){
    this.http.delete<Laboratorio>(this.API+id)
  }

  public getLaboratoriobyId(id:number): Observable<Laboratorio> {
    return this.http.get<Laboratorio>(this.API+id).pipe(first());;
  }

  public getLaboratorio():Observable<Laboratorio[]> {
    return this.http.get<Laboratorio[]>(this.API).pipe(first());
  }

}
