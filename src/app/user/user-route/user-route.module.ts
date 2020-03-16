import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRouteRoutingModule } from './user-route-routing.module';
import { AuthComponent } from '../Pages/auth/auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    UserRouteRoutingModule
  ]
})
export class UserRouteModule { }
