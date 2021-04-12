import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {GameListComponent} from "./gamelist/gamelist.component";
import {RegisterComponent} from "./register/register.component";
import {DetailComponent} from "./detail/detail.component";


const routes: Routes = [
  {path: 'games', component: GameListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: '', redirectTo: '/games', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
