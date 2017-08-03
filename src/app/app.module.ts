import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';

import { DataService } from './shared/dataService';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch:'full' },
    { path: 'home', component: HomeComponent }
	]

@NgModule({
  imports:      [ BrowserModule , FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent , HomeComponent ],
   providers: [DataService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
