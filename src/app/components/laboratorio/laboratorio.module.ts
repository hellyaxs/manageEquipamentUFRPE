import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaboratorioRoutingModule } from './laboratorio-routing.module';
import { LaboratorioService } from './services/laboratorio.service';
import { AluguelLabService } from './services/aluguel-lab.service';
import { CadastroLaboratorioComponent } from './cadastro-laboratorio/cadastro-laboratorio.component';
import { ListLaboratoriosComponent } from './list-laboratorios/list-laboratorios.component';
import { AluguelLaboratorioComponent } from './aluguel-laboratorio/aluguel-laboratorio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroLaboratorioComponent,
    ListLaboratoriosComponent,
    AluguelLaboratorioComponent,
  ],
  imports: [
    CommonModule,
    LaboratorioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    CadastroLaboratorioComponent,
    ListLaboratoriosComponent,
    AluguelLaboratorioComponent,
  ],
  providers:[
    LaboratorioService,
    AluguelLabService
  ]
})
export class LaboratorioModule { }
