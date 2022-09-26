import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipamento } from 'src/app/interfaces/equipamento';
import { EquipamentoService } from 'src/app/services/equipamento.service';

@Component({
  selector: 'app-list-equipment',
  templateUrl: './list-equipment.component.html',
  styleUrls: ['./list-equipment.component.css']
})
export class ListEquipmentComponent implements OnInit {

  equipamentos: Array<Equipamento> = [];
  constructor(private EquipamentoService: EquipamentoService,
              private route:Router) { }

  ngOnInit(): void {
    this.getEquipamento(); 
  }

  getEquipamento():void { 
    this.EquipamentoService.getEquipamento().subscribe(response => { 
      this.equipamentos = response; 
    })
  }

  visualizarEquipamento(id:number):void{
    this.route.navigateByUrl(`/aluguelEquimento/${id}`);
  }

}
