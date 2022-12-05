import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { delay, first, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AluguelEqui } from '../../../interfaces/aluguel-equi';

@Injectable()
export class AluguelEquiService {

  private readonly API = `${environment.API}AlugarEquipamentos/`

  constructor(private http:HttpClient) { }

  public alugarEquipamneto(aluguelEquipameto: AluguelEqui):Observable<AluguelEqui>{
    return this.http.post<AluguelEqui>(this.API,aluguelEquipameto);
  }

  public getHorariosOcupados(id_equipamento: number):Observable<AluguelEqui[]>{
    return this.http
    .get<AluguelEqui[]>(this.API+id_equipamento)
        .pipe(
            delay(2000),
            first());
    }
}
