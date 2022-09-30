import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CadastroEquipamentoComponent } from './components/cadastro-equipamento/cadastro-equipamento.component';
import { CadastroLaboratorioComponent } from './components/cadastro-laboratorio/cadastro-laboratorio.component';
import { ListEquipmentComponent } from './components/list-equipment/list-equipment.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListLaboratoriosComponent }  from './components/list-laboratorios/list-laboratorios.component';
import { AluguelComponent } from './components/aluguel/aluguel.component';
// import { dayGridPlugin } from '@fullcalendar/daygrid'; // a plugin!
// import { interactionPlugin }  from '@fullcalendar/interaction'; // a plugin!
// import { bootstrap5Plugin }  from '@fullcalendar/bootstrap5';
import { DemoComponentComponent } from './components/demo-component/demo-component.component';
import { AluguelEquipamentoComponent } from './components/aluguel-equipamento/aluguel-equipamento.component';
import { AluguelLaboratorioComponent } from './components/aluguel-laboratorio/aluguel-laboratorio.component';
// import { FlatpickrModule } from 'angularx-flatpickr';
// import { CalendarModule, DateAdapter } from 'angular-calendar';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// FullCalendarModule.registerPlugins([ // register FullCalendar plugins
//   dayGridPlugin,
//   interactionPlugin,
//   bootstrap5Plugin
// ]);

@NgModule({
  declarations: [
    AppComponent,
    CadastroEquipamentoComponent,
    CadastroLaboratorioComponent,
    NavbarComponent,
    ListLaboratoriosComponent,
    ListEquipmentComponent,
    AluguelComponent,
    DemoComponentComponent,
    AluguelEquipamentoComponent,
    AluguelLaboratorioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    
    // NgbModalModule,
    // FlatpickrModule.forRoot(),
    // CalendarModule.forRoot({
    //   provide: DateAdapter,
    //   useFactory: adapterFactory,
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
