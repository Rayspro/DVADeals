import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule, userRoutes } from './user-routing.module';
import { UserComponent } from './user.component';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [userRoutes],
  imports: [
    CommonModule,
    UserRoutingModule,
    AuthModule,
    DashboardModule
  ]
})
export class UserModule { }
