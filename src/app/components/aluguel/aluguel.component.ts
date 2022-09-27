import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluguel',
  templateUrl: './aluguel.component.html',
  styleUrls: ['./aluguel.component.css']
})
export class AluguelComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


}
