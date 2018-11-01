import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard.component';
import { StatsComponent } from './stats/stats.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
    imports: [CommonModule, RouterModule, NgbModule, SharedModule, ComponentsModule],
    exports: [
      CommonModule,
      RouterModule,

      StatsComponent,
      DashboardComponent
    ],
    declarations: [
        DashboardComponent,
        StatsComponent
    ]
  })
  export class DashboardModule {
  }
