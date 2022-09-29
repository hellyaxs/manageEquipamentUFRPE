import { Component, OnChanges, OnInit } from '@angular/core';
import { Laboratorio } from 'src/app/interfaces/laboratorio';
import { LaboratorioService } from 'src/app/services/laboratorio.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-laboratorios',
  templateUrl: './list-laboratorios.component.html',
  styleUrls: ['./list-laboratorios.component.css']
})
export default class ListLaboratoriosComponent implements OnInit {

  laboratorios: Array<Laboratorio> = [];
  constructor(private EquipamentoService: LaboratorioService, private route: Router) {
    this.route.events.subscribe(x=>{
      this.getLaboratorio();
    });
   }

  ngOnInit(): void {
     this.getLaboratorio()
  }



  getLaboratorio():void { 
    this.EquipamentoService.getLaboratorio().subscribe(response => { 
      this.laboratorios = response; 
    })
  }

  visualizarLaboratorio(id:number):void{
    this.route.navigateByUrl(`/aluguelLaboratorio/${id}`);
  }

  editLaboratorio(lab:Laboratorio): void { 
    this.route.navigate(["/cadastroLaboratorio"],{state:lab})
  }
}
