import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    imports: [CommonModule, RouterModule, NgbModule],
    exports: [
      CommonModule,
      RouterModule,
      // PageHeaderComponent

    ],
    declarations: [

    ]
  })
  export class ComponentsModule {
  }
