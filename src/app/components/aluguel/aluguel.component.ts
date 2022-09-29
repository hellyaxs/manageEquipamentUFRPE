import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadChildren, Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular';
import { Equipamento } from 'src/app/interfaces/equipamento';
import { Laboratorio } from 'src/app/interfaces/laboratorio';
import { EquipamentoService } from 'src/app/services/equipamento.service';
import { LaboratorioService } from 'src/app/services/laboratorio.service';


@Component({
  selector: 'app-aluguel',
  templateUrl: './aluguel.component.html',
  styleUrls: ['./aluguel.component.css']
})
export class AluguelComponent implements OnInit {

  equipamento!: Equipamento 
  laboratorio!: Laboratorio
  equipamento_upado!: boolean  
  laboratorio_upado!: boolean

  constructor(private router:Router, private equipamentoService:EquipamentoService, private laboratorioService: LaboratorioService ) {
    this.router.events.subscribe(x=>{
      this.loadEquipamento,
      this.loadLaboratorio
    });
   }

  ngOnInit(): void {
  }

  loadEquipamento():void{
    const navigation = this.router.getCurrentNavigation()
    if(navigation?.extras.state !=null && navigation?.extras.state != undefined){
      this.equipamento = navigation?.extras.state as Equipamento
    }
  }

  loadLaboratorio():void { 
    const navigation = this.router.getCurrentNavigation()
    if(navigation?.extras.state !=null&&navigation?.extras.state != undefined){
      this.laboratorio = navigation?.extras.state as Laboratorio
    }
  }

  
  
 

   calendarOptions: CalendarOptions = {
    headerToolbar: {
      right: 'title,prev,next',
      center: '',
      left: 'timeGridDay,timeGridWeek,dayGridMonth'
    },
    initialView: 'dayGridMonth',
    eventColor: '#F4C584',
    navLinks: false,
    
     themeSystem: 'bootstrap5',
    // dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2022-09-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }


}
