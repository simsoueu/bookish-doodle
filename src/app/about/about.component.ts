import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  codeInstall = `npm install --save @ng-bootstrap/ng-bootstrap`;

  codeRoot = `
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  ...
  imports: [NgbModule, ...],
  ...
})
export class YourAppModule {
}`;

  codeOther = `
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  ...
  imports: [NgbPaginationModule, NgbAlertModule, ...],
  ...
})
export class YourAppModule {
}`;

  codeSystem = `
map: {
  '@ng-bootstrap/ng-bootstrap': 'node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
}`;
}