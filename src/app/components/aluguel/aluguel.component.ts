import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-aluguel',
  templateUrl: './aluguel.component.html',
  styleUrls: ['./aluguel.component.css']
})
export class AluguelComponent implements OnInit {

  constructor(private router:Router) {
    this.router.events.subscribe(x=>{
      
    });
   }

  ngOnInit(): void {
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
