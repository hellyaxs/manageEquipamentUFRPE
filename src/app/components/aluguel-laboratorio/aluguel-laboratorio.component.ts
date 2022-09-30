import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Laboratorio } from 'src/app/interfaces/laboratorio';
import { LaboratorioService } from 'src/app/services/laboratorio.service';


@Component({
  selector: 'app-aluguel-laboratorio',
  templateUrl: './aluguel-laboratorio.component.html',
  styleUrls: ['./aluguel-laboratorio.component.css']
})
export class AluguelLaboratorioComponent implements OnInit {
  laboratorio!: Laboratorio

  constructor(private router:Router, private laboratorioService: LaboratorioService) { 
    this.router.events.subscribe(x=>{
      this.loadLaboratorio
    });
  }

  ngOnInit(): void {
  }

  loadLaboratorio():void { 
    const navigation = this.router.getCurrentNavigation()
    if(navigation?.extras.state !=null&&navigation?.extras.state != undefined){
      this.laboratorio = navigation?.extras.state as Laboratorio
    }
  }


}
