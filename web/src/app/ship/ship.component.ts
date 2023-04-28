/*
* File: api.service.ts
* Author: Szabó Brigitta
* Copyright: 2023, Szabó Brigitta
* Group: Szoft II/N
* Date: 2023-04-28
* Github: https://github.com/tailorbrigit/
* Licenc: GNU GPL
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit 
{

  ships !: any;
  shipForm !: FormGroup;

  constructor
  (
    private api: ApiService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void 
  {
    this.getShips();
    this.shipForm = this.formBuilder.group({
      name: [''],
      length: [''],
      price: [''],
      person: [''],
      trailer: [''],
    });
  }

  getShips()
  {
    this.api.getShips().subscribe
    ({
      next: (response:any) => 
      {
        console.log(response)
        this.ships = response;
      }
    })
  }

  onClickSaveButton()
  {
    let ship = 
    {
      name: this.shipForm.value.name,
      length: this.shipForm.value.length,
      price: this.shipForm.value.price,
      person: this.shipForm.value.person,
      trailer: this.shipForm.value.trailer
    }

    this.api.addShip(ship).subscribe
    ({
      next: (response: any) => 
      {
        console.log(response);
      },

      error: () => {}
    });
  }

}
