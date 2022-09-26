import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CadastroEquipamentoComponent } from './components/cadastro-equipamento/cadastro-equipamento.component';
import { CadastroLaboratorioComponent } from './components/cadastro-laboratorio/cadastro-laboratorio.component';
import { ListEquipmentComponent } from './components/list-equipment/list-equipment.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import ListLaboratoriosComponent from './components/list-laboratorios/list-laboratorios.component';
import { ModalboxComponent } from './components/modalbox/modalbox.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroEquipamentoComponent,
    CadastroLaboratorioComponent,
    NavbarComponent,
    ListLaboratoriosComponent,
    ListEquipmentComponent,
    ModalboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
