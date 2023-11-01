import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { InventarioComponent } from './inventario/inventario.component';
import { DadoComponent } from './dado/dado.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';
import { Selectornumerico2Component } from './selectornumerico2/selectornumerico2.component';
import { ListadoarticulosComponent } from './listadoarticulos/listadoarticulos.component';

// si se va a usar este import,no usar el de linea 8,porque se genera conflicto y no muestra nada página de inicio
//import { ElementosModule } from './elementos/elementos.module'

import {HttpClientModule} from '@angular/common/http';
import { BarramenuComponent } from './barramenu/barramenu.component';

//const routes: Routes = [];
const routes: Routes = [
  { path: 'home', component: AppComponent }
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    DadoComponent,
    CronometroComponent,
    SelectornumericoComponent,
    Selectornumerico2Component,
    ListadoarticulosComponent,
    BarramenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    //ElementosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
