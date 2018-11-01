import { Component, NgZone } from '@angular/core';
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

  component: string;

  isLargeScreenOrLess: boolean;
  isSmallScreenOrLess: boolean;

  sidebarCollapsed = true;

  tableOfContent: any[] = [];

  constructor(public route: ActivatedRoute, private _router: Router, ngZone: NgZone) {
    // This component is used in route definition 'components'
    // So next child route will always be ':componentType' & next one will always be ':pageType' (or tab)
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const parentRoute = this.route.snapshot.parent;

      this.component = parentRoute.url[1].path;
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

    this.tableOfContent = component.demos.map(demo => {
      return {
        fragment: 'wow',
        title: 'asdf'
      };
    });

    // Example instead of undefined
    // if (component instanceof undefined) {
    //   this.tableOfContent = component.demos.map(demo => {
    //     return {
    //       fragment: demo.id,
    //       title: demo.title
    //     };
    //   });
    // } else if (component instanceof AppApiPageComponent) {
    //   let toc = [
    //     ...getLinks(component.components)
    //   ];

    //   if (component.classes.length > 0) {
    //     const klasses = getLinks(component.classes);
    //     toc = toc.concat(toc.length > 0  ? [{}, ...klasses] : klasses);
    //   }

    //   if (component.configs.length > 0) {
    //     const configs = getLinks(component.configs);
    //     toc = toc.concat(toc.length > 0  ? [{}, ...configs] : configs);
    //   }

      // this.tableOfContent = toc;

    // } else {
    //   // TODO: maybe we should also have an abstract class to test instanceof
    //   this.tableOfContent = Object.values(component.sections).map(section => section);
    // }
  }
}
