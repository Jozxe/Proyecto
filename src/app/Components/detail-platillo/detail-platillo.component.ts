import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatilloService } from 'src/app/Services/platillo.service'; 
import { Ingredientes } from 'src/Models/Ingredientes';
import { meals } from 'src/Models/Ingredientes';

@Component({
  selector: 'app-detail-platillo',
  templateUrl: './detail-platillo.component.html',
  styleUrls: ['./detail-platillo.component.css']
})
export class DetailPlatilloComponent implements OnInit {
  loading:boolean =false;
  path:string ="";
  title:string="";
  detail:string="";

  constructor(private route: ActivatedRoute, private platilloDao:PlatilloService) { }

  ngOnInit(): void {
   this.showDetail();
  }

  showDetail()
  {
    var id = this.route.snapshot.paramMap.get("id");
    console.log(id);
    if(id === "null" || id === "")
    {

    }else{
      this.loading = true;
      this.platilloDao.getDetallePlatillo(Number(id)).subscribe(respuesta =>{
        this.loading = false;
        console.log(respuesta);
        if(respuesta.meals === null)
        {
          alert("No se encontro detalle del platillo");
        }else{
        this.path = respuesta.meals[0].strMealThumb;
        this.title = respuesta.meals[0].strMeal;
        this.detail = respuesta.meals[0].strInstructions;
        }
      },
      error => {
        this.loading = false;
        alert("Ocurrio un error al recuperar listado de ingredientes");
      });
    }
  }

}
