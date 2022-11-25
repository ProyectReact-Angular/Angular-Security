import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarArticuloComponent } from './dashboard/agregar-articulo/agregar-articulo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './security/Auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch:'full'},
  {path: 'dashboard' , component: DashboardComponent, canActivate: [AuthGuard] },
  {path: 'dashboard/crearArticulo' , component: AgregarArticuloComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
