import { Component, OnInit } from '@angular/core';
import { PlatilloService } from 'src/app/Services/platillo.service'; 
import { Platillos } from 'src/Models/Platillos'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading:boolean = false;
  ListaPlatillos:Platillos[] = [];

  constructor(private platillosDao : PlatilloService) { 

  }

  ngOnInit(): void {
    this.load();
  }

 load(){
   this.loading = true;
   this.platillosDao.getPlatillo().subscribe(respuesta =>{
     this.loading = false;
     this.ListaPlatillos = respuesta.meals;
   },
   error => {
     this.loading = false;
     alert("Ocurrio un error al recuperar platillo");
   });
 }

 

}
