import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard.component';
import { SecureGuard } from './secure.guard';
import { IntercepterService } from '../../intercepter.service';

@NgModule({
  declarations: [MainComponent, DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  providers: [SecureGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IntercepterService,
      multi: true
    }
  ]
})
export class DashboardModule { }
