import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroLaboratorioComponent } from './cadastro-laboratorio/cadastro-laboratorio.component';
import { ListLaboratoriosComponent } from './list-laboratorios/list-laboratorios.component';
import { AluguelLaboratorioComponent } from './aluguel-laboratorio/aluguel-laboratorio.component';

const routes: Routes = [
  {
    path: '',
    component: ListLaboratoriosComponent
  },
  {
    path: 'cadastroLaboratorio',
    component: CadastroLaboratorioComponent
  },
  {
    path: 'aluguelLaboratorio',
    children:[
      {
        path: ':id',
        component: AluguelLaboratorioComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratorioRoutingModule { }
