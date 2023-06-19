import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DbService } from './services/db.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [DbService]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [DbService]
  },
  {
    path: 'agendarhoralaboratorio',
    loadChildren: () => import('./agendarhoralaboratorio/agendarhoralaboratorio.module').then( m => m.AgendarhoralaboratorioPageModule),
    canActivate: [DbService]
  },
  {
    path: 'resultadoexamenes',
    loadChildren: () => import('./resultadoexamenes/resultadoexamenes.module').then( m => m.ResultadoexamenesPageModule),
    canActivate: [DbService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
