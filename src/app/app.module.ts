import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { SharedModule } from './shared/shared.module';

import { ComponentsModule } from './components/components.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),

    HomeModule,
    ComponentsModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
