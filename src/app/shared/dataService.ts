import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs';

import 'rxjs/add/operator/map';


@Injectable()
export class DataService{ 
	public appData:any;
	constructor (private http: Http) {
		console.log("in dataservice cnstrctr");	 
	}
	private jsonUrl = './app/Data.json';  
 
	getjsonData(): Observable<any>{
		 console.log('getjsonData called::');
		 return this.http.get(this.jsonUrl).map(res => {
			 console.log('Got response::', res, res.json());
				return res.json();
			 console.log('Got response in getjsondata::', res.json());
		 });
     }
	 
	/*  setData(key, data){
        this.appData[key] = data;
    }
    getData(key){
      return this.appData[key]
    } */
}  
