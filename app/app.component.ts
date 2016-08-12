import { Component } from '@angular/core';
import {Injectable, Observable} from 'angular2/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from 'app/components/home.component';
import {ServicesComponent} from 'app/components/services.component';
import {PortfolioComponent} from 'app/components/portfolio.component';

@Component({
  selector: 'app-nav',
  templateUrl: 'app/components/partials/_nav.html',
  directives: [HomeComponent, ServicesComponent, PortfolioComponent]
})

export const routes: RouterConfig = [
  { path: '', redirectTo: 'home', terminal: true },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent }
];

export class AppComponent { 
	constructor(){
		console.log(':::AppComponent:::');			
	}
}
