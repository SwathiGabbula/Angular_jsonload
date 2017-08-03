import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
   templateUrl: './app.component.html',
})
export class AppComponent  { 
  constructor() {
         console.log('AppComponent constructot called');
    }

}
