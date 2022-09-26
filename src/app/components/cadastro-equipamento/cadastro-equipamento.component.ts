import { Component, OnInit } from '@angular/core';
import { Equipamento } from 'src/app/interfaces/equipamento';
import { EquipamentoService } from 'src/app/services/equipamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-equipamento',
  templateUrl: './cadastro-equipamento.component.html',
  styleUrls: ['./cadastro-equipamento.component.css']
})
export class CadastroEquipamentoComponent implements OnInit {

  equipamento:Equipamento ={
    id:0,
    identificacao: '',
    marca: "",
    modelo: "",
    descricao: "",
    codigo: 0, 
    disponibilidade_equipament: true
  };

  constructor(private equipamentoService:EquipamentoService, private route:Router) { }

  ngOnInit(): void {
    
  }

  saveEquipamento():void{
    this.equipamentoService.postEquipamento(this.equipamento).subscribe(  );
    this.route.navigate(["/"]);
  }

}
