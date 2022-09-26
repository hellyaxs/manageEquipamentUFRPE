import { Component, OnInit } from '@angular/core';
import { Laboratorio } from 'src/app/interfaces/laboratorio';
import { LaboratorioService } from 'src/app/services/laboratorio.service';
import { Route, Router } from '@angular/router';

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
    disponibilidade: true 
  }

  constructor(private laboratorioService:LaboratorioService, private route: Router) { }

  ngOnInit(): void {
  }

  save():void{
    this.laboratorioService.postLaboratorio(this.lab).subscribe();
    this.route.navigate(['/laboratorios']);
  }
}
