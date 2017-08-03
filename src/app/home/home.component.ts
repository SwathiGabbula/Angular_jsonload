import { NgModule , OnInit  } from '@angular/core';

import { Component } from '@angular/core';
import { DataService } from '../shared/dataService';

import {Observable} from 'rxjs';

import 'rxjs/add/operator/map';
@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit { 
	rowList:any;
	 public companyList : any;
	private isCompany =true;
    private isTechnology = false;
	public jsonData : any;
	constructor(private dataService: DataService) {
		 console.log("in cuntrycomp cnstrctr");	 
	 }
	 ngOnInit(){  
        this.dataService.getjsonData().subscribe(data => {
			console.log("data::", data);
			this.rowList = Array.of(data);	
			this.setTableData(this.jsonData)});
		}
   
    onSelectCompany(){
        this.isCompany = true;
        this.isTechnology = false;
    }
    onSelectTechnology(){
        this.isTechnology = true;
        this.isCompany = false;
    }
	 setTableData(this.jsonData){ 
     for(let data of jsonData) {
          for(let finalData of data.rows){
           if( finalData.category == "Companies" )
                this.companyList.push({
                    title : finalData.title,
                    image : finalData.imageHref,
                    url: finalData.url,
                    description: finalData.description
                })
          }
        }
    }
	
}
	
	
 
 
