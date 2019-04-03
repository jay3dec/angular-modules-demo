import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDashboardRoutingModule } from './profile-dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileDashboardRoutingModule
  ]
})
export class ProfileDashboardModule { }
