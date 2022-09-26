import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Equipamento } from 'src/app/interfaces/equipamento';
import { EquipamentoService } from 'src/app/services/equipamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-equipment',
  templateUrl: './list-equipment.component.html',
  styleUrls: ['./list-equipment.component.css']
})
export class ListEquipmentComponent implements OnInit,OnChanges {

  equipamentos: Array<Equipamento> = [];

  constructor(private EquipamentoService: EquipamentoService, private router: Router) {  }

  ngOnInit(): void {
    this.getEquipamento(); 
  }

  ngOnChanges(): void {
      this.getEquipamento();
  }


  getEquipamento():void { 
    this.EquipamentoService.getEquipamento().subscribe(response => { 
      this.equipamentos = response; 
    })
  }


  visualizarEquipamento(id:number):void{
    this.router.navigateByUrl(`/aluguelEquimento/${id}`);
  }

  redireciona():void{
    this.router.navigate(['/cadastroEquipamento/']);
  }

}

