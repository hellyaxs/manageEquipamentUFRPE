import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AluguelEquipamentoComponent } from "./aluguel-equipamento/aluguel-equipamento.component";
import { CadastroEquipamentoComponent } from "./cadastro-equipamento/cadastro-equipamento.component";
import { ListEquipmentComponent } from "./list-equipment/list-equipment.component";

const routes:Routes =[

  {
    path: '',
    component: ListEquipmentComponent,

  },
  {
    path: 'cadastroEquipamento',
    component: CadastroEquipamentoComponent,

  },
  {
    path: 'aluguelEquipamento',
    children:[
      {
        path: ':id',
        component: AluguelEquipamentoComponent
      }
    ]
  },

]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]

})

export class EquipamentoRouting{}
