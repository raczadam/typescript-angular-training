import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList:  SalesPerson[] = [
    new SalesPerson("Jeno", "Kovacs", "jeno@kovacs.org", 30000),
    new SalesPerson("Red", "Mother", "redmother@rm.org", 40000),
    new SalesPerson("John", "Doe", "jon@doe.org", 60000),
    new SalesPerson("Test", "Esther", "test@test.com", 50000)
  ];

  constructor() { }


  ngOnInit(): void {
    console.log("ngOnInit -> invoked");
  }

}
