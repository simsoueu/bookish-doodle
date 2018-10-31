import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { CodeComponent } from './code/code.component';
import { CodeHighlightService } from './code/code-highlight.service';
import { ComponentWrapperComponent } from './component-wrapper/component-wrapper.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
    imports: [CommonModule, RouterModule, NgbModule],
    exports: [
      CommonModule,
      RouterModule,

      CodeComponent,
      PageWrapperComponent,
      ComponentWrapperComponent,
      SideNavComponent
    ],
    declarations: [

        CodeComponent,
        PageWrapperComponent,
        ComponentWrapperComponent,
        SideNavComponent,

    ],
    providers: [
        CodeHighlightService
    ]
  })
  export class SharedModule {
  }
