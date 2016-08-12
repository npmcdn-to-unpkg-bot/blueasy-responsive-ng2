import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HomeComponent} from 'app/components/home.component';
import {ServicesComponent} from 'app/components/services.component';
import {PortfolioComponent} from 'app/components/portfolio.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HomeComponent, ServicesComponent,  PortfolioComponent ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
