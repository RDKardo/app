import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ClienteComponent} from './cliente/cliente.component';
import {AuthGuard} from './security/auth.guard';
import {LComponent} from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home',pathMatch:'full',canActivate:[AuthGuard]},
  { path: 'home', component : HomeComponent,canActivate:[AuthGuard]},
  { path: 'cliente', component : ClienteComponent,canActivate:[AuthGuard]},
  { path: 'login', component : LComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
