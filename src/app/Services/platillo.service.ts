import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { meals } from 'src/Models/Platillos'; 

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {

  constructor(private clienteHttp:HttpClient) {}

  getPlatillo(){
     return this.clienteHttp.get<meals>('https://www.themealdb.com/api/json/v1/1/random.php');
    }

    getPlatillosLista(value:string){
          return this.clienteHttp.get<meals>('https://www.themealdb.com/api/json/v1/1/search.php?f='+value);  
     }

    getDetallePlatillo(id:number){
      return this.clienteHttp.get<meals>('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id);
     }

}
