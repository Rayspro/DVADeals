import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule, userRoutes } from './user-routing.module';
import { UserComponent } from './user.component';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [userRoutes],
  imports: [
    CommonModule,
    UserRoutingModule,
    AuthModule
  ]
})
export class UserModule { }
