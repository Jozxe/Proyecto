import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { IngredientesComponent } from './Components/ingredientes/ingredientes.component';
import { PlatillosComponent } from './Components/platillos/platillos.component';
import { DetailPlatilloComponent } from './Components/detail-platillo/detail-platillo.component';
import { PerfilComponent } from './Components/perfil/perfil.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'login'},
  {path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'ingredientes', component: IngredientesComponent},
  { path: 'platillos', component: PlatillosComponent},
  { path: 'detalle/:id', component: DetailPlatilloComponent},
  { path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
