import { Component, OnInit, ViewChild } from '@angular/core';
import { PlatilloService } from 'src/app/Services/platillo.service'; 
import { Platillos } from 'src/Models/Platillos';
import { createCustomElement } from '@angular/elements';
import { NgModule,Injector } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent implements OnInit {
  ListaPlatillos:Platillos[] = [];
  ListaPlatillosAux:Platillos[] = [];
  aux:string[] = [];
  ListaImg:string[] = [];
  loading:boolean = false;
  loadingList:boolean = false;
  path:string = "";
  detail:string ="";
  title:string ="";
  search:string ="apple";
  option:string ="";
 
   constructor(private platillosDao : PlatilloService) { 
 
   }
 
   ngOnInit(): void {
     this.load();
    
     setInterval(() => { this.load()  }, 50000);
     this.buscar();
   }

  load(){
    this.loading = true;
    let lista:string[] = [];
    for(var i = 0; i < 5; i++){
      this.platillosDao.getPlatillo().subscribe(respuesta =>{
        lista.push(respuesta.meals[0].strMealThumb);
      },
      error => {
        this.loading = false;
        alert("Ocurrio un error al recuperar listado");
      });
    }
    
    this.ListaImg = lista;
    this.loading = false;
  }

  buscar(){
    
    if(this.search ===""){
     //filtrar();
    }else{
      var letra = this.search.substring(0,1);
      if(this.aux.includes(letra)){
       //filtrar();
      }else{
        this.loadingList = true;
        this.platillosDao.getPlatillosLista(letra).subscribe(respuesta =>{
          this.loadingList = false;
          if(respuesta.meals === null){
         //filtrar();
          }
          else{
            this.ListaPlatillos = respuesta.meals;
            this.aux.push(letra);
          }
        },
        error => {
          this.loadingList = false;
          alert("Ocurrio un error al recuperar listado");
        });
      }
    }
  }

  get filtrar() {
    return  this.ListaPlatillos.filter(item => {
      return item.strMeal.toLowerCase().indexOf(this.search.toLowerCase()) > -1
    });
 }

}
