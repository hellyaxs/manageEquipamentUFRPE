import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AluguelEquipamentoComponent } from "./aluguel-equipamento/aluguel-equipamento.component";
import { CadastroEquipamentoComponent } from "./cadastro-equipamento/cadastro-equipamento.component";
import { ListEquipmentComponent } from "./list-equipment/list-equipment.component";

const routes:Routes =[
  {
    path: '',
    redirectTo:'equipamentos'
  },
  {
    path: 'equipamentos',
    component: ListEquipmentComponent,
    pathMatch: 'full'
  },
  {
    path: 'cadastroEquipamento',
    component: CadastroEquipamentoComponent,
    pathMatch: 'full'
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
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]

})

export class EquipamentoRouting{}
