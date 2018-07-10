import { Component, OnInit } from '@angular/core';
import {CarSearches} from  '../shared/car-searches.model'
import { EmployeeService } from '../shared/employee.service'
import { FlightsDept } from '../shared/flights-dept.model';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {

  pickL : string;
  dropL : string;
  pickT : string;
  dropT : string;
  pickD : string;
  dropD : string;

  pick : string;
  drop : string;
  d1 : string;
  d2 : string;
  t1 : string;
  t2 : string;
  airport : string;
  supp : string;
  spec : string;
  included : string;
  price : string;
  picName : string;
  pic : string;
  categ : string;
  days : string;

  constructor(private employeeService : EmployeeService,private router: Router) { }

  ngOnInit() {

    this.pickL = localStorage.getItem("pickL");
    this.dropL = localStorage.getItem("dropL");
    this.pickT = localStorage.getItem("pickT");
    this.dropT = localStorage.getItem("dropT");
    this.pickD = localStorage.getItem("pickD");
    this.dropD = localStorage.getItem("dropD");

    this.employeeService.getCarSearched(this.pickL,this.dropL,this.pickD,this.dropD,this.pickT,this.dropT);
  }

  show(emp : CarSearches )
  {
    this.pick = emp.pickL;
    this.drop = emp.dropL
    this.d1 = emp.pickD;
    this.d2 = emp.dropD;
    this.t1 = emp.pickT;
    this.t2 = emp.dropT;
    this.airport = emp.airportName;
    this.supp = emp.supplier;
    this.spec = emp.spec;
    this.included = emp.included;
    this.price = emp.price;
    this.picName = emp.carName;
    this.pic = emp.picName;
    this.categ = emp.category;

    localStorage.setItem("pick",this.pick);
    localStorage.setItem("drop",this.drop);
    localStorage.setItem("d1",this.d2);
    localStorage.setItem("d2",this.d2);
    localStorage.setItem("t1",this.t2);
    localStorage.setItem("airport",this.airport);
    localStorage.setItem("supp",this.supp);
    localStorage.setItem("spec",this.spec);
    localStorage.setItem("included",this.included);
    localStorage.setItem("price",this.price);
    localStorage.setItem("picName",this.picName);
    localStorage.setItem("pic",this.pic);
    localStorage.setItem("categ",this.categ);
    
    this.router.navigate(['car-after']);
  }

}
