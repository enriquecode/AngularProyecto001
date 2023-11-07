import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operacionesbasicas',
  templateUrl: './operacionesbasicas.component.html',
  styleUrls: ['./operacionesbasicas.component.css']
})
export class OperacionesbasicasComponent implements OnInit {
  valor1!: number;
  valor2!: number;
  operacion: string = "ninguna";
  resultado!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
