import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Equipamento } from 'src/app/interfaces/equipamento';
import { EquipamentoService } from 'src/app/components/equipamentos/services/equipamento.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-equipment',
  templateUrl: './list-equipment.component.html',
  styleUrls: ['./list-equipment.component.css']
})
export class ListEquipmentComponent implements OnInit {

  $equipamentos!: Observable<Equipamento[]>;

  constructor(private EquipamentoService: EquipamentoService, private router: Router) {
    this.$equipamentos = this.EquipamentoService.getEquipamento() // assim o reponsavel polo unsubscribe e o angalar
   }

  ngOnInit(): void {

  }

  visualizarEquipamento(equipamento: Equipamento):void{
    this.router.navigateByUrl(`/aluguelEquipamento/${equipamento.id}`,  { state: equipamento});
  }

  editEquipamento(equipamento: Equipamento): void {
    this.router.navigate(["/cadastroEquipamento"], { state: equipamento})
  }

}

