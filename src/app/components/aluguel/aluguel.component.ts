import { ChangeDetectorRef } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation, Input
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { CalendarEventActionsComponent } from 'angular-calendar/modules/common/calendar-event-actions.component';
import { startOfDay } from 'date-fns';
import { AluguelEqui } from 'src/app/interfaces/aluguel-equi';
import { AluguelLab } from 'src/app/interfaces/aluguel-lab';
import { Equipamento } from 'src/app/interfaces/equipamento';
import { Laboratorio } from 'src/app/interfaces/laboratorio';
import { AluguelEquiService } from 'src/app/services/aluguel-equi.service';
import { AluguelLabService } from 'src/app/services/aluguel-lab.service';


@Component({
  selector: 'app-aluguel',
  templateUrl: './aluguel.component.html',
  styleUrls: ['./aluguel.component.css']
 
})
export class AluguelComponent implements OnInit {

  @Input() aluguelt?: Equipamento | Laboratorio;
  
  
  events: CalendarEvent[] = []
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  constructor(private aluguel:AluguelEquiService,
              private aluguelLab:AluguelLabService,private router:ActivatedRoute)
    {
       this.preencherCalendario();
    }


  setView(view: CalendarView) {
    this.view = view;
  }

  preencherCalendario(){
    if(this.aluguelt?.type === "Equipamento")
    {
      this.aluguel.getHorariosOcupados(this.aluguelt?.id)
       .subscribe(t=>{
          t.forEach(element=>{
            this.events = [...this.events,
                  {
                    title: element.name,
                    start: new Date(element.solicitacao)
                  }];
                  
          })
       })
       console.log(this.aluguelt)
    }
    else if(this.aluguelt?.type === "Laboratorio")
    {
      this.aluguelLab.getHorariosOcupados(this.aluguelt?.id)
       .subscribe(t=>{
            t.forEach(element=>{
              this.events = [...this.events,
                    {
                      title: element.name,
                      start: new Date(element.solicitacao)
                    }];
                  })
               })
    }
    
  }
 

  ngOnInit(): void {
    this.preencherCalendario();
  }
 }
 



// @Component({
//   selector: 'app-aluguel',
//   templateUrl: './aluguel.component.html',
//   styleUrls: ['./aluguel.component.css']
// })
// export class AluguelComponent implements {

//   equipamento!: Equipamento 
//   laboratorio!: Laboratorio
//   equipamento_upado!: boolean  
//   laboratorio_upado!: boolean

//   // constructor(private router:Router, private equipamentoService:EquipamentoService, private laboratorioService: LaboratorioService ) {
//   //   this.router.events.subscribe(x=>{
//   //     this.loadEquipamento,
//   //     this.loadLaboratorio
//   //   });
//   //  }

 

//   loadEquipamento():void{
//     const navigation = this.router.getCurrentNavigation()
//     if(navigation?.extras.state !=null && navigation?.extras.state != undefined){
//       this.equipamento = navigation?.extras.state as Equipamento
//     }
//   }

//   loadLaboratorio():void { 
//     const navigation = this.router.getCurrentNavigation()
//     if(navigation?.extras.state !=null&&navigation?.extras.state != undefined){
//       this.laboratorio = navigation?.extras.state as Laboratorio
//     }
//   }

//   @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

//   view: CalendarView = CalendarView.Month;

//   CalendarView = CalendarView;

//   viewDate: Date = new Date();

//   modalData: {
//     action: string;
//     event: CalendarEvent;
//   };

//   actions: CalendarEventAction[] = [
//     {
//       label: '<i class="fas fa-fw fa-pencil-alt"></i>',
//       a11yLabel: 'Edit',
//       onClick: ({ event }: { event: CalendarEvent }): void => {
//         this.handleEvent('Edited', event);
//       },
//     },
//     {
//       label: '<i class="fas fa-fw fa-trash-alt"></i>',
//       a11yLabel: 'Delete',
//       onClick: ({ event }: { event: CalendarEvent }): void => {
//         this.events = this.events.filter((iEvent) => iEvent !== event);
//         this.handleEvent('Deleted', event);
//       },
//     },
//   ];

//   refresh = new Subject<void>();

//   events: CalendarEvent[] = [
//     {
//       start: subDays(startOfDay(new Date()), 1),
//       end: addDays(new Date(), 1),
//       title: 'A 3 day event',
//       color: { ...colors.red },
//       actions: this.actions,
//       allDay: true,
//       resizable: {
//         beforeStart: true,
//         afterEnd: true,
//       },
//       draggable: true,
//     },
//     {
//       start: startOfDay(new Date()),
//       title: 'An event with no end date',
//       color: { ...colors.yellow },
//       actions: this.actions,
//     },
//     {
//       start: subDays(endOfMonth(new Date()), 3),
//       end: addDays(endOfMonth(new Date()), 3),
//       title: 'A long event that spans 2 months',
//       color: { ...colors.blue },
//       allDay: true,
//     },
//     {
//       start: addHours(startOfDay(new Date()), 2),
//       end: addHours(new Date(), 2),
//       title: 'A draggable and resizable event',
//       color: { ...colors.yellow },
//       actions: this.actions,
//       resizable: {
//         beforeStart: true,
//         afterEnd: true,
//       },
//       draggable: true,
//     },
//   ];

//   activeDayIsOpen: boolean = true;

//   constructor(private modal: NgbModal) {}

//   dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
//     if (isSameMonth(date, this.viewDate)) {
//       if (
//         (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
//         events.length === 0
//       ) {
//         this.activeDayIsOpen = false;
//       } else {
//         this.activeDayIsOpen = true;
//       }
//       this.viewDate = date;
//     }
//   }

//   eventTimesChanged({
//     event,
//     newStart,
//     newEnd,
//   }: CalendarEventTimesChangedEvent): void {
//     this.events = this.events.map((iEvent) => {
//       if (iEvent === event) {
//         return {
//           ...event,
//           start: newStart,
//           end: newEnd,
//         };
//       }
//       return iEvent;
//     });
//     this.handleEvent('Dropped or resized', event);
//   }

//   handleEvent(action: string, event: CalendarEvent): void {
//     this.modalData = { event, action };
//     this.modal.open(this.modalContent, { size: 'lg' });
//   }

//   addEvent(): void {
//     this.events = [
//       ...this.events,
//       {
//         title: 'New event',
//         start: startOfDay(new Date()),
//         end: endOfDay(new Date()),
//         color: colors.red,
//         draggable: true,
//         resizable: {
//           beforeStart: true,
//           afterEnd: true,
//         },
//       },
//     ];
//   }

//   deleteEvent(eventToDelete: CalendarEvent) {
//     this.events = this.events.filter((event) => event !== eventToDelete);
//   }

//   setView(view: CalendarView) {
//     this.view = view;
//   }

//   closeOpenMonthViewDay() {
//     this.activeDayIsOpen = false;
//   }
  
  
 

//   //  calendarOptions: CalendarOptions = {
//   //   headerToolbar: {
//   //     right: 'title,prev,next',
//   //     center: '',
//   //     left: 'timeGridDay,timeGridWeek,dayGridMonth'
//   //   },
//   //   initialView: 'dayGridMonth',
//   //   eventColor: '#F4C584',
//   //   navLinks: false,
    
//   //    themeSystem: 'bootstrap5',
//   //   // dateClick: this.handleDateClick.bind(this), // bind is important!
//   //   events: [
//   //     { title: 'event 1', date: '2022-09-01' },
//   //     { title: 'event 2', date: '2019-04-02' }
//   //   ]
//   // };

//   // handleDateClick(arg:any) {
//   //   alert('date click! ' + arg.dateStr)
//   // }


// }
