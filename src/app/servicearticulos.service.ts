import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicearticulosService {

  constructor(private http: HttpClient) { }

  retornar() {
    //datos duros
    // return [
    //           {
    //             codigo: 1,
    //             descripcion: "papas",
    //             precio: 12.33
    //           },
    //           {
    //             codigo: 2,
    //             descripcion: "manzanas",
    //             precio: 54
    //           },
    //           {
    //             codigo: 3,
    //             descripcion: "sandía",
    //             precio: 14
    //           }
    //        ];

           return this.http.get("https://scratchya.com.ar/vue/datos.php");
  }

}
