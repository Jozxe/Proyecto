import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs'; 
import { meals } from 'src/Models/Ingredientes'; 

@Injectable({
  providedIn: 'root'
})

export class IngredientesService {
  _path:string = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

  constructor(private clienteHttp:HttpClient) {}

  getIngredientes(){
     return this.clienteHttp.get<meals>(this._path);
    }

}
