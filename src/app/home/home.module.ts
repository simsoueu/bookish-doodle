import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { PageBottomComponent } from '../components/page-bottom/page-bottom.component';
import { HomeComponent } from './home.component';




@NgModule({
    imports: [CommonModule, RouterModule, NgbModule],
    exports: [
      CommonModule,
      RouterModule,

      HomeComponent,
      PageHeaderComponent,
      PageBottomComponent
    ],
    declarations: [PageHeaderComponent, PageBottomComponent, HomeComponent]
  })
  export class HomeModule {
  }
