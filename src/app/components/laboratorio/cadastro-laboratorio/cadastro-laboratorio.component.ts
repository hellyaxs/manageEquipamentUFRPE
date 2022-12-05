import { Component, OnInit } from '@angular/core';
import { Laboratorio } from 'src/app/interfaces/laboratorio';
import { LaboratorioService } from 'src/app/components/laboratorio/services/laboratorio.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-laboratorio',
  templateUrl: './cadastro-laboratorio.component.html',
  styleUrls: ['./cadastro-laboratorio.component.css']
})
export class CadastroLaboratorioComponent implements OnInit {

  lab:Laboratorio = {
    type:"Laboratorio",
    id: 0,
    identificacao: '',
    localizacao: '',
    capacidade: 0,
    descricao: '',
    disponibilidade: true
  }

  constructor(private laboratorioService:LaboratorioService, private route: Router) {
    this.route.events.subscribe(x=>{this.loadLaboratorio()   });
   }

  ngOnInit(): void {

  }

  save():void{
    const navigation = this.route.getCurrentNavigation()
    if(navigation?.extras.state !=null&&navigation?.extras.state != undefined){
      this.laboratorioService.putLaboratorio(this.lab)

    }else{
      this.laboratorioService.postLaboratorio(this.lab).subscribe();
      this.route.navigate(['/laboratorios']);

    }
  }

  loadLaboratorio():void{
    const navigation = this.route.getCurrentNavigation()
    if(navigation?.extras.state !=null&&navigation?.extras.state != undefined){
      this.lab = navigation?.extras.state as Laboratorio
      this.lab.type ="Laboratorio"

    }

  }
}
