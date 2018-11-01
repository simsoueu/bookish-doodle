import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard.component';
import { StatsComponent } from './stats/stats.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { OptionsComponent } from './options/options.component';

@NgModule({
    imports: [CommonModule, RouterModule, NgbModule, SharedModule, ComponentsModule],
    exports: [
      CommonModule,
      RouterModule,

      StatsComponent,
      OptionsComponent,
      DashboardComponent
    ],
    declarations: [

        OptionsComponent,
        StatsComponent,
        DashboardComponent,

    ]
  })
  export class DashboardModule {
  }
