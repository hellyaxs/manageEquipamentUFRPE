import { Component, OnInit } from '@angular/core';
import { Laboratorio } from 'src/app/interfaces/laboratorio';
import { LaboratorioService } from 'src/app/services/laboratorio.service';

@Component({
  selector: 'app-cadastro-laboratorio',
  templateUrl: './cadastro-laboratorio.component.html',
  styleUrls: ['./cadastro-laboratorio.component.css']
})
export class CadastroLaboratorioComponent implements OnInit {

  lab:Laboratorio = {
    id: 0,
    identificacao: 0,
    localizacao: '',
    capacidade: 0,
    descricao: '',
    disponibilidade_laboratorio: true 
  }

  constructor(private laboratorioService:LaboratorioService) { }

  ngOnInit(): void {
  }

  save():void{
    this.laboratorioService.postLaboratorio(this.lab).subscribe();
  }
}
