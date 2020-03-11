import { NgModule } from '@angular/core';
import { HomeComponent } from './user/Pages/home/home.component';
import { LoginComponent } from './user/Pages/login/login.component';
import { RegisterComponent } from './user/Pages/register/register.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeConfigure = [LoginComponent, RegisterComponent, HomeComponent]