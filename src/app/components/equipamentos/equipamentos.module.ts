import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AluguelEquiService } from './services/aluguel-equi.service';
import { EquipamentoService } from './services/equipamento.service';
import { EquipamentoRouting } from './Equipamento-routing.module';
import { AluguelEquipamentoComponent } from "./aluguel-equipamento/aluguel-equipamento.component";
import { CadastroEquipamentoComponent } from "./cadastro-equipamento/cadastro-equipamento.component";
import { ListEquipmentComponent } from "./list-equipment/list-equipment.component";
import { AluguelComponent } from '../aluguel/aluguel.component';


@NgModule({
  declarations: [
    CadastroEquipamentoComponent,
    ListEquipmentComponent,
    AluguelEquipamentoComponent,
    
  ],
  exports:[
    CadastroEquipamentoComponent,
    ListEquipmentComponent,
    AluguelEquipamentoComponent,
  ],
  imports: [
    CommonModule,
    EquipamentoRouting,
    FormsModule
  ],
  providers:[
    AluguelEquiService,
    EquipamentoService
  ]
})
export class EquipamentosModule { }
