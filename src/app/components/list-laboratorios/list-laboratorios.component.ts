import { Component, OnInit } from '@angular/core';
import { Laboratorio } from 'src/app/interfaces/laboratorio';
import { LaboratorioService } from 'src/app/services/laboratorio.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-laboratorios',
  templateUrl: './list-laboratorios.component.html',
  styleUrls: ['./list-laboratorios.component.css']
})
export class ListLaboratoriosComponent implements OnInit {

  laboratorios: Array<Laboratorio> = [];
  constructor(private EquipamentoService: LaboratorioService, private route: Router) { }

  ngOnInit(): void {
    this.getEquipamento(); 
  }

  getEquipamento():void { 
    this.EquipamentoService.getLaboratorio().subscribe(response => { 
      this.laboratorios = response; 
    })
  }
  
  redireciona():void { 
    this.route.navigate(['/']);
  }

}
