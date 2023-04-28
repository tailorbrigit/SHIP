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
import { RouterModule, Routes } from '@angular/router';
import { ShipComponent } from './ship/ship.component';

const routes: Routes = 
[
  {path: 'ship', component: ShipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
