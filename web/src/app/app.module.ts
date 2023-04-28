/*
* File: api.service.ts
* Author: Szabó Brigitta
* Copyright: 2023, Szabó Brigitta
* Group: Szoft II/N
* Date: 2023-04-28
* Github: https://github.com/tailorbrigit/
* Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipComponent } from './ship/ship.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
