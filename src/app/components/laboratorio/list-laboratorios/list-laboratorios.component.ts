import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Laboratorio } from 'src/app/interfaces/laboratorio';
import { LaboratorioService } from 'src/app/components/laboratorio/services/laboratorio.service';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-laboratorios',
  templateUrl: './list-laboratorios.component.html',
  styleUrls: ['./list-laboratorios.component.css']
})
export class ListLaboratoriosComponent implements OnInit {

  laboratorios!: Observable<Laboratorio[]>;
  constructor(private EquipamentoService: LaboratorioService, private route: Router) {
    this.laboratorios = this.EquipamentoService.getLaboratorio()
   }

  ngOnInit(): void {

  }

  getLaboratorio():void {
    this.laboratorios = this.EquipamentoService.getLaboratorio()
  }

  visualizarLaboratorio(lab:Laboratorio):void{
    this.route.navigateByUrl(`laboratorios/aluguelLaboratorio/${lab.id}`, {state:lab});
  }

  editLaboratorio(lab:Laboratorio): void {
    this.route.navigateByUrl(`laboratorios/cadastroLaboratorio/`,{state:lab})
  }
}
