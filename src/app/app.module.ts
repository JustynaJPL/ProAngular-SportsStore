import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LOCALE_ID} from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from "./store/store.module";
import { registerLocaleData } from '@angular/common';

import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard"

@NgModule({
	imports:[
	BrowserModule,
	StoreModule,
	RouterModule.forRoot([
		{ path:"store", component:StoreComponent, 
		canActivate:[StoreFirstGuard]},
		{ path:"cart" , component: CartDetailComponent,
		canActivate:[StoreFirstGuard] },
		{ path:"checkout", component: CheckoutComponent,
		canActivate:[StoreFirstGuard]},
		{path:"admin", loadChildren:"app/admin/admin.module#AdminModule", canActivate:[StoreFirstGuard]},
		{ path:"**", redirectTo:"/store"}
		])],
	
  declarations: [
    AppComponent
  ],  
  providers:[StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
