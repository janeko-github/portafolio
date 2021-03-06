import { RouterModule, Routes } from '@angular/router';
import {AboutComponent, PortafolioComponent, PortafolioItemComponent, BuscarComponent}
from "./components/index.paginas";
const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portafolioitem/:id', component: PortafolioItemComponent },
  { path: 'buscar/:termino', component: BuscarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes,{useHash:true,enableTracing:false});
