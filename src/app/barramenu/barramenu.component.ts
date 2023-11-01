import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'boot-barramenu',
  templateUrl: './barramenu.component.html',
  styleUrls: ['./barramenu.component.css']
})
export class BarramenuComponent implements OnInit {
  @Input() opciones!: string[];
  @Input() colorfondo!: string;
  // salida hacia el padre
  @Output() presionopcion = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  presionenhijo(i: number): void {
    this.presionopcion.emit(i);
  }

}
