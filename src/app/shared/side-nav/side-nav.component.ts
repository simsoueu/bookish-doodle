import {Component, HostBinding} from '@angular/core';
import {Router} from '@angular/router';

export const componentsList = [
  'Accordion', 'Alert', 'Buttons'
];

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent {

  components = componentsList;

  constructor(private router: Router) {}

  isActive(currentRoute: any[], exact = true): boolean {
    return this.router.isActive(this.router.createUrlTree(currentRoute), exact);
  }
}
