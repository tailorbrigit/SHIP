/*
* File: api.service.ts
* Author: Szabó Brigitta
* Copyright: 2023, Szabó Brigitta
* Group: Szoft II/N
* Date: 2023-04-28
* Github: https://github.com/tailorbrigit/
* Licenc: GNU GPL
*/

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService 
{
  url = "http://localhost:8000/ships";
  constructor(private http: HttpClient) {}

  getShips()
  {
    return this.http.get<any>(this.url);
  }

  addShip(ship: any)
  {
    let httpHeader = new HttpHeaders();
    httpHeader.append('Content-Type', 'application/json');
    let httpOptions = 
    {
      headers: httpHeader
    };
    return this.http.post(this.url, ship, httpOptions);
  }
}


