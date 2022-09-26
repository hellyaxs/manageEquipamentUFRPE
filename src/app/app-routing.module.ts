import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroEquipamentoComponent } from './components/cadastro-equipamento/cadastro-equipamento.component';
import { CadastroLaboratorioComponent } from './components/cadastro-laboratorio/cadastro-laboratorio.component';
import { ListEquipmentComponent } from './components/list-equipment/list-equipment.component';
import { ListLaboratoriosComponent } from './components/list-laboratorios/list-laboratorios.component';
import { ModalboxComponent } from './components/modalbox/modalbox.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: ListEquipmentComponent
  },
  {
    path: 'equipamentos',
    component: ListEquipmentComponent
  },
  {
    path: 'laboratorios',
    component: ListLaboratoriosComponent
  },
  { 
    path: 'cadastroEquipamento',
    component: CadastroEquipamentoComponent 
  },
  { 
    path: 'cadastroLaboratorio',
    component: CadastroLaboratorioComponent
  },
  { 
    path: 'aluguelEquimento',
    children:[
      {
        path: ':id',
        component: ModalboxComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
