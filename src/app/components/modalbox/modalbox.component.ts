import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AluguelEqui } from 'src/app/interfaces/aluguel-equi';
import { AluguelEquiService } from 'src/app/services/aluguel-equi.service';

@Component({
  selector: 'app-modalbox',
  templateUrl: './modalbox.component.html',
  styleUrls: ['./modalbox.component.css']
})
export class ModalboxComponent implements OnInit {

   alugueis: Array<AluguelEqui> =[];
   id!:number;

  constructor(private alugalEqui:AluguelEquiService,
              private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.alugalEqui.getHorariosOcupados(2).subscribe(response =>{
       this.alugueis = response;
       console.log(this.alugueis);
    });

    this.id = this.activeRouter.snapshot.params['id'];
    this.visualizar(this.id);
  }

  visualizar(id:number):void{
    this.alugalEqui.getHorariosOcupados(id).subscribe(response =>{
      this.alugueis = response;
      console.log(this.alugueis);
   });
  }
}
