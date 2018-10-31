import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';

@NgModule({
    imports: [CommonModule, RouterModule, NgbModule],
    exports: [
      CommonModule,
      RouterModule,
      PageWrapperComponent
    ],
    declarations: [
        PageWrapperComponent
    ],
    providers: []
  })
  export class SharedModule {
  }