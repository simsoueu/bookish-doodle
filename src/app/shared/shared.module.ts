import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { CodeComponent } from './code/code.component';
import { CodeHighlightService } from "./code/code-highlight.service";

@NgModule({
    imports: [CommonModule, RouterModule, NgbModule],
    exports: [
      CommonModule,
      RouterModule,
      CodeComponent,
      PageWrapperComponent
    ],
    declarations: [
        PageWrapperComponent,
        CodeComponent
    ],
    providers: [
        CodeHighlightService
    ]
  })
  export class SharedModule {
  }