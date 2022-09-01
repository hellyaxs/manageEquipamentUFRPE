import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Laboratorio } from '../interfaces/laboratorio';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {

  constructor(private http:HttpClient) { }

  private readonly API = `${environment.API}laboratorio/`
 

  public postLaboratorio(boydEquipamento:Laboratorio):Observable<Laboratorio> {
      return this.http.post<Laboratorio>(this.API,boydEquipamento);
  }

  public putLaboratorio(id:number,boydEquipamento:Laboratorio) {
    this.http.put<Laboratorio>(this.API+id,boydEquipamento)
  }

  public delete(id:number){
    this.http.delete<Laboratorio>(this.API+id)
  }

  public getLaboratoriobyId(id:number): Observable<Laboratorio> {
    return this.http.get<Laboratorio>(this.API+id);
  }

  public getLaboratorio():Observable<Laboratorio[]> {
    return this.http.get<Laboratorio[]>(this.API);
  }

}
