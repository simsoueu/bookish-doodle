import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html'
})
export class PageWrapperComponent {
  @Input()
  pageTitle: string;
}