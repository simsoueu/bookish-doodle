import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { StatsComponent } from './dashboard/stats/stats.component';
// import { StatsComponent } from './dashboard/stats/stats.component';

const DEFAULT_API_PATH = {path: '', pathMatch: 'full', redirectTo: 'examples'};

const componentRoutes = [{
  path: 'dashboard/stats',
  children: [
    DEFAULT_API_PATH,
    {path: ':tab', component: StatsComponent}
  ]}];

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', pathMatch: 'full', redirectTo: 'dashboard/stats'  },
  ...componentRoutes,
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
