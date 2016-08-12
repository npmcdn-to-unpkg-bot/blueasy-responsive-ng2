import { Component } from '@angular/core';
import {Injectable, Observable} from 'angular2/core';

@Component({
  selector: 'services',
  templateUrl: 'app/components/partials/_services.html'
})
export class ServicesComponent { 
	constructor(){
		console.log(':::ServicesComponent:::');			
	}
}
