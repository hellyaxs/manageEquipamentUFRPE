import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { AluguelLab } from '../interfaces/aluguel-lab';

@Injectable({
  providedIn: 'root'
})
export class AluguelLabService {

  private readonly API = `${environment.API}alugarLaboratorios/`

  constructor(private http:HttpClient) { }

  public alugarLaboratorio(aluguelLaboratorio: AluguelLab):Observable<AluguelLab>{
    return this.http.post<AluguelLab>(this.API,aluguelLaboratorio);
  }

  public getHorariosOcupados(id_Laboratorio: number):Observable<AluguelLab[]>{
    return this.http.get<AluguelLab[]>(this.API+id_Laboratorio);
  }
}
