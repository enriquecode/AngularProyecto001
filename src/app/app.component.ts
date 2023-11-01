import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//para que funcione el ejemplo de selector numerico 2
//hay que importar el componente desde aqui, WTF, no desde app.module.ts, se importa
//y ya aqui se debe de reconocer???
import { Selectornumerico2Component} from './selectornumerico2/selectornumerico2.component'

//se puede decir que ./ es src/app
import { ServicearticulosService} from './servicearticulos.service';

@Component({
  selector: 'raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //codigo inicial
  
  title = 'proyecto001';

  nombre = 'Rodriguez Pablo';
  edad = 18;
  email = 'rpablo@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;

  esActivo() {
    if (this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador Inactivo';
  }

  ultimos3Sueldos() {
    let suma=0;
    for(let x=0; x<this.sueldos.length; x++)
      suma+=this.sueldos[x];
    return suma;
  }

  contador=1;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  } 
  
  articulos: any;
  //codigo inicial


  //codigo para dados
  //esta seccion de codigo, se puede pasar a un componente llamado por ej: juegadados.ts
  // valor1: number;
  // valor2: number;
  // valor3: number;
  // resultado: string="";

  // constructor() {
  //   this.valor1 = this.retornarAleatorio();
  //   this.valor2 = this.retornarAleatorio();
  //   this.valor3 = this.retornarAleatorio();
  // }

  //ejemplo de articulos recuperando en u servicio desde este ts
  //constructor(private http: HttpClient) { }
  //ejemplo de articulos recuperando en u servicio desde este ts

  // retornarAleatorio() {
  //   return Math.trunc(Math.random() * 6) + 1;
  // }

  // tirar() {
  //   this.valor1 = this.retornarAleatorio();
  //   this.valor2 = this.retornarAleatorio();
  //   this.valor3 = this.retornarAleatorio();
  //   if (this.valor1==this.valor2 && this.valor1==this.valor3)    
  //     this.resultado='Ganó';
  //   else
  //     this.resultado='Perdió';
  // }
  //codigo para dados

  //codigo para cronomnetro
  // mensaje='';

  // actualizar(t: number) {
  //   this.mensaje = t + '(se actualiza cada 10 segundos)';
  // }
  //codigo para cronomnetro

  //codigo para selector numerico
  //en este caso, aqui no se modifica este archivo, WTF
  //no porque es desde el template padre (HTML)
  //codigo para selector numerico

  //Codigo para Selector Numerico 2 desde la clase (ts) padre
  //aqui se usa ViewChild

  // @ViewChild('selector1') selector1!: Selectornumerico2Component;
  // @ViewChild('selector2') selector2!: Selectornumerico2Component;  

  // fijarSelector1(valor:number) {
  //   this.selector1.fijar(valor);
  // }

  // fijarSelector2(valor:number) {
  //   this.selector2.fijar(valor);
  // }

  //Codigo para Selector Numerico 2

  //Codigo para listado de articulos, datos duros
  // articulos = [{codigo:1, descripcion:'papas', precio:10.55},
  //              {codigo:2, descripcion:'manzanas', precio:12.10},
  //              {codigo:3, descripcion:'melon', precio:52.30},
  //              {codigo:4, descripcion:'cebollas', precio:17},
  //              {codigo:5, descripcion:'calabaza', precio:20},
  //             ];
  //Codigo para listado de articulos

  //para recuperar el listado de articulos con un servicio desde aqui en app.component.ts,
  //ver implementacion en el init

  //ejemplo de articulos recuperando en u servicio desde este ts
  //ngOnInit() {
    // this.http.get("https://scratchya.com.ar/vue/datos.php")
    //   .subscribe(
    //     resultado => {
    //       this.articulos = resultado;
    //     }
    //   );
  //}
  //ejemplo de articulos recuperando en u servicio desde este ts

  //ejemplo de articulos recuperando en un servicio desde un componente de servicio
  //este codigo sirve para cualquiera de las 2 opciones que se tiene en ngOnInit
  constructor(private serviceArticulos: ServicearticulosService) { }
  //ejemplo de articulos recuperando en un servicio desde un componente de servicio
  
  ngOnInit(){
    //cuando en servicearticulos.service.ts son datos duros 
    // this.articulos = this.serviceArticulos.retornar();

    //con datos obtnenidos desde un servicio web externo
    this.serviceArticulos.retornar()
    .subscribe(
      result => this.articulos = result
    );
  }

  opciones = [
    "Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4", "Opcion 5"
  ];

  presionenpadre(op: number) {
    alert("Se informa que se presiono la opcion " + op);
  }
}


