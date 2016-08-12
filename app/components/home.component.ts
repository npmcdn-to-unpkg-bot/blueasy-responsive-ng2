import { Component } from '@angular/core';
import {Injectable, Observable} from 'angular2/core';

@Component({
  selector: 'home',
  templateUrl: 'app/components/partials/_home.html'
})
export class HomeComponent { 
	constructor(){
		console.log(':::HomeComponent:::');			
	}
}
