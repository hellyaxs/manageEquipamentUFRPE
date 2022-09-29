import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Equipamento } from 'src/app/interfaces/equipamento';
import { EquipamentoService } from 'src/app/services/equipamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-equipment',
  templateUrl: './list-equipment.component.html',
  styleUrls: ['./list-equipment.component.css']
})
export class ListEquipmentComponent implements OnInit {

  equipamentos: Array<Equipamento> = [];

  constructor(private EquipamentoService: EquipamentoService, private router: Router) { 
    this.router.events.subscribe(x=>{
      this.getEquipamento();
    });
   }

  ngOnInit(): void {
    this.getEquipamento(); 
  }

 

  getEquipamento():void { 
    this.EquipamentoService.getEquipamento().subscribe(response => { 
      this.equipamentos = response; 
    })
  }


  visualizarEquipamento(equipamento: Equipamento):void{
    this.router.navigateByUrl(`/aluguelEquipamento/${equipamento.id}`,  { state: equipamento});
  }

  editEquipamento(equipamento: Equipamento): void { 
    this.router.navigate(["/cadastroEquipamento"], { state: equipamento})
  }

}

