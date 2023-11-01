import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadoComponent } from './dado/dado.component';



@NgModule({
  declarations: [
    DadoComponent
  ],
  imports: [
    CommonModule
  ],
  //esto sirve para que los demas puedan consumir DadoComponent
  exports: [DadoComponent],
})
export class ElementosModule { }
