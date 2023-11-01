import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selectornumerico',
  templateUrl: './selectornumerico.component.html',
  styleUrls: ['./selectornumerico.component.css']
})
export class SelectornumericoComponent implements OnInit {

  @Input() minimo: number=1;
  @Input() maximo: number=1;
  actual: number=1;

  constructor() { }

  ngOnInit(): void {
    this.actual = this.minimo;
  }

  incrementar() {
    if (this.actual<this.maximo)
      this.actual++;
  }

  decrementar() {
    if (this.actual>this.minimo)
      this.actual--;
  }

  fijar(v:number) {
    //esta de más esta linea, tiene el mismo efecto
    // if (v>=this.minimo && v<=this.maximo)
    //es lo mismo que lo de arriba, pero más facil de leer
    // if (v<>this.actual)
      this.actual=v;
  }

}
