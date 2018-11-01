import { Component, NgZone, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
// import { AppApiPageComponent } from '../api-page/api.component';


@Component({
  selector: 'app-component-wrapper',
  templateUrl: 'component-wrapper.component.html',
  styleUrls: ['./component-wrapper.component.sass']
})

export class ComponentWrapperComponent {
  activeTab = 'examples';

  @Input() data: string;

  component: string;

  isLargeScreenOrLess: boolean;
  isSmallScreenOrLess: boolean;

  sidebarCollapsed = true;

  tableOfContent: any[] = [];

  constructor(public route: ActivatedRoute, private _router: Router, ngZone: NgZone) {


    console.log(this.data);
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const routeSnapshot = this.route.snapshot;

      this.component = routeSnapshot.url[1].path;
    });

    // information extracted from https://getbootstrap.com/docs/4.1/layout/overview/
    // TODO: we should implements our own mediamatcher, according to bootstrap layout.
    const smallScreenQL = matchMedia('(max-width: 767.98px)');
    smallScreenQL.addListener((event) => ngZone.run(() => this.isSmallScreenOrLess = event.matches));
    this.isSmallScreenOrLess = smallScreenQL.matches;

    const largeScreenQL = matchMedia('(max-width: 1199.98px)');
    this.isLargeScreenOrLess = largeScreenQL.matches;
    largeScreenQL.addListener((event) => ngZone.run(() => this.isLargeScreenOrLess = event.matches));
  }

  updateNavigation(component) {
    const getLinks = (typeCollection) => {
      return typeCollection.map(item => ({
        fragment: item,
        title: item
      }));
    };
    this.tableOfContent = [];


  }
}
