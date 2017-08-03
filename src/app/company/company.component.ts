import { NgModule , OnInit  } from '@angular/core';

import { Component } from '@angular/core';
import { DataService } from '../shared/dataService';

import {Observable} from 'rxjs';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.css']
	
})
export class CountryComponent implements OnInit { 
	
	rowList:Observable<any>;
	constructor(private dataService: DataService) {
		 console.log("in cuntrycomp cnstrctr");	 
	 }
	 ngOnInit(){  
        this.dataService.getjsonData().subscribe(data => {
			console.log("data::", data);
			this.rowList = data;
		});
    } 
 }
