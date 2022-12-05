import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AluguelEquipamentoComponent } from './components/equipamentos/aluguel-equipamento/aluguel-equipamento.component';
import { AluguelLaboratorioComponent } from './components/laboratorio/aluguel-laboratorio/aluguel-laboratorio.component';
import { AluguelComponent } from './components/aluguel/aluguel.component';
import { CadastroEquipamentoComponent } from './components/equipamentos/cadastro-equipamento/cadastro-equipamento.component';
import { CadastroLaboratorioComponent } from './components/laboratorio/cadastro-laboratorio/cadastro-laboratorio.component';
import { ListEquipmentComponent } from './components/equipamentos/list-equipment/list-equipment.component';
import { ListLaboratoriosComponent } from './components/laboratorio/list-laboratorios/list-laboratorios.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import("./components/equipamentos/equipamentos.module").then(m=>m.EquipamentosModule)
  },
  {
    path: 'laboratorios',
    loadChildren: () => import("./components/laboratorio/laboratorio.module").then(m=> m.LaboratorioModule)
  },

  {
    path:'alugar',
    children:[
      {
        path: ':id',
        component:AluguelComponent
      }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
