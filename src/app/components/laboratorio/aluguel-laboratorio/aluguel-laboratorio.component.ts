import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AluguelLab } from 'src/app/interfaces/aluguel-lab';
import { Laboratorio } from 'src/app/interfaces/laboratorio';
import { AluguelLabService } from 'src/app/components/laboratorio/services/aluguel-lab.service';
import { LaboratorioService } from 'src/app/components/laboratorio/services/laboratorio.service';


@Component({
  selector: 'app-aluguel-laboratorio',
  templateUrl: './aluguel-laboratorio.component.html',
  styleUrls: ['./aluguel-laboratorio.component.css']
})
export class AluguelLaboratorioComponent implements OnInit {
  laboratorio!: Laboratorio
  aluguel:AluguelLab={
    name: '',
    id: 0,
    email: '',
    solicitacao: new Date(),
    devolucao: new Date(),
    tempoDeUso: 2,
    laboratorio: this.laboratorio
  }
  timeLAB!:string
  dateLAB!:string

  constructor(private router:Router, private aluguelLabService:AluguelLabService) {
    this.router.events.subscribe(x=>{
      this.loadLaboratorio();
    });
  }

  ngOnInit(): void {
  }

  loadLaboratorio():void {
    const navigation = this.router.getCurrentNavigation()
    if(navigation?.extras.state !=null&&navigation?.extras.state != undefined){
      this.laboratorio = navigation?.extras.state as Laboratorio
      this.laboratorio.type ="Laboratorio"
    }
  }

  alugarLab(){
    if(this.aluguel.name !='' && this.aluguel.email !=''){
    this.loadLaboratorio()
    this.aluguel.solicitacao = new Date(this.dateLAB+" "+this.timeLAB)
    this.aluguel.laboratorio = this.laboratorio
    console.log(this.aluguel)
    this.aluguelLabService.alugarLaboratorio(this.aluguel).subscribe()
    }

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
