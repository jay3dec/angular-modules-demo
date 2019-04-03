import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : 'home', loadChildren : './home-dashboard/home-dashboard.module#HomeDashboardModule'},
  {path : 'profile', loadChildren : './profile-dashboard/profile-dashboard.module#ProfileDashboardModule'},
  {path : '', redirectTo : '/home', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
