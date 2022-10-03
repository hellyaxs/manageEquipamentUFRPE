import { Component, OnInit } from '@angular/core';
import { Equipamento } from 'src/app/interfaces/equipamento';
import { Router } from '@angular/router';
import { EquipamentoService } from 'src/app/services/equipamento.service';
import { LaboratorioService } from 'src/app/services/laboratorio.service';

@Component({
  selector: 'app-aluguel-equipamento',
  templateUrl: './aluguel-equipamento.component.html',
  styleUrls: ['./aluguel-equipamento.component.css']
})
export class AluguelEquipamentoComponent implements OnInit {

  equipamento!: Equipamento

  constructor(private router:Router, private equipamentoService:EquipamentoService) {
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

}
