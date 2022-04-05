import { Component, OnInit } from '@angular/core';
import { IngredientesService } from 'src/app/Services/ingredientes.service';
import { Ingredientes } from 'src/Models/Ingredientes';
import { meals } from 'src/Models/Ingredientes';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent implements OnInit {
  loading:boolean = false;
  ListaIngredientes:Ingredientes[] = [];
  path:string = "";
   detail:string ="";
   title:string ="";
 
   constructor(private ingredientesDao : IngredientesService,) { 
 
   }
 
   ngOnInit(): void {
     this.load();
   }

  load(){
    this.loading = true;
    this.ingredientesDao.getIngredientes().subscribe(respuesta =>{
      this.loading = false;
      this.ListaIngredientes = respuesta.meals;
    },
    error => {
      this.loading = false;
      alert("Ocurrio un error al recuperar listado de ingredientes");
    });
  }

  showDetail(item:Ingredientes)
  {
    this.path = "https://www.themealdb.com/images/ingredients/" + item.strIngredient+".png";
    this.title = item.strIngredient;
    this.detail = item.strDescription;
  }

}
