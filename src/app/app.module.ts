import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IngredientesComponent } from './Components/ingredientes/ingredientes.component';
import { PlatillosComponent } from './Components/platillos/platillos.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { LoginComponent } from './Components/login/login.component';
import { HeaderComponent } from './Components/header/header.component';
import { DetailPlatilloComponent } from './Components/detail-platillo/detail-platillo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngredientesComponent,
    PlatillosComponent,
    PerfilComponent,
    LoginComponent,
    HeaderComponent,
    DetailPlatilloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
