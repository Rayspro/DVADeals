import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'auth',
    component: UserComponent,
    children: [
      { path: '', loadChildren: './auth/auth.module#AuthModule' }
    ]
  },
  {
    path: 'home', component: UserComponent, children: [
      { path: '', component: HomeComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

export const userRoutes = [UserComponent, HomeComponent]