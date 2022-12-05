import { Component, OnInit } from '@angular/core';
import { Equipamento } from 'src/app/interfaces/equipamento';
import { EquipamentoService } from 'src/app/components/equipamentos/services/equipamento.service';
import { Router } from '@angular/router';
import { state } from '@angular/animations';
import { map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-equipamento',
  templateUrl: './cadastro-equipamento.component.html',
  styleUrls: ['./cadastro-equipamento.component.css']
})
export class CadastroEquipamentoComponent implements OnInit {

  equipamento:Equipamento ={
    type:"Equipamento",
    id:0,
    identificacao:'',
    marca:'',
    modelo:'',
    descricao:'',
    codigo:0,
    disponibilidade: true
  };

  constructor(private equipamentoService:EquipamentoService, private route:Router) {
   this.route.events.subscribe(x=>this.loadEquipamneto());

   }

  ngOnInit(): void {
  this.equipamentoService.listequipamentByID(1)
  }

  saveEquipamento():void{
    const navigation = this.route.getCurrentNavigation()
    if(navigation?.extras.state !=null&&navigation?.extras.state != undefined){
      this.equipamentoService.putEquipamento(this.equipamento)

    }else{
      this.equipamentoService.postEquipamento(this.equipamento).subscribe();
      this.route.navigate(["/"] );
    }

  }

  loadEquipamneto():void{
    const navigation = this.route.getCurrentNavigation()
    if(navigation?.extras.state !=null&&navigation?.extras.state != undefined){
      this.equipamento = navigation?.extras.state as Equipamento
      this.equipamento.type ="Equipamento"

    }

  }

}
