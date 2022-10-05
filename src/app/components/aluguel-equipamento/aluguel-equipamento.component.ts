import { Component, OnInit } from '@angular/core';
import { Equipamento } from 'src/app/interfaces/equipamento';
import { Router } from '@angular/router';
import { EquipamentoService } from 'src/app/services/equipamento.service';
import { LaboratorioService } from 'src/app/services/laboratorio.service';
import { AluguelEqui } from 'src/app/interfaces/aluguel-equi';
import { AluguelEquiService } from 'src/app/services/aluguel-equi.service';

@Component({
  selector: 'app-aluguel-equipamento',
  templateUrl: './aluguel-equipamento.component.html',
  styleUrls: ['./aluguel-equipamento.component.css']
})
export class AluguelEquipamentoComponent implements OnInit {

  equipamento!: Equipamento
  aluguel:AluguelEqui = {
    name: '',
    id: 0,
    email: '',
    solicitacao: new Date(),
    devolucao: new Date(),
    tempoDeUso: 2,
    equipamento: this.equipamento
  }
  time!:string
  date!:string

  constructor(private router:Router,private aluguelService:AluguelEquiService ) {
    this.router.events.subscribe(x=>{
      this.loadEquipamento()
    });
  }

  ngOnInit(): void {
  }

  loadEquipamento():void{
    const navigation = this.router.getCurrentNavigation()
    if(navigation?.extras.state !=null && navigation?.extras.state != undefined){
      this.equipamento = navigation?.extras.state as Equipamento
      this.equipamento.type = "Equipamento"
    }
  }
  
  alugarEqui():void{
    if(this.aluguel.name !='' && this.aluguel.email !=''){
      this.loadEquipamento()
      this.aluguel.solicitacao = new Date(this.date+" "+this.time);
      this.aluguel.equipamento = this.equipamento
      console.log(this.equipamento)
      this.aluguelService.alugarEquipamneto(this.aluguel).subscribe();
    }
    
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
