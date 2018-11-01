import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ApiDocsComponent } from './api-docs/api-docs.component';

@NgModule({
    imports: [CommonModule, RouterModule, NgbModule],
    exports: [
      CommonModule,
      RouterModule,
      // PageHeaderComponent
      ApiDocsComponent
    ],
    declarations: [
      ApiDocsComponent
    ]
  })
  export class ComponentsModule {
  }
