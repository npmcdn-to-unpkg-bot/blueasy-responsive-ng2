import { Component } from '@angular/core';
import {Injectable, Observable} from 'angular2/core';

@Component({
  selector: 'portfolio',
  templateUrl: 'app/components/partials/_portfolio.html'
})
export class PortfolioComponent { 
	constructor(){
		console.log(':::PortfolioComponent:::');			
	}
}
