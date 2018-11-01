import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.sass']
})
export class PageWrapperComponent {
  @Input()
  pageTitle: string;
}
