import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import {Employee} from  '../shared/employee.model'
import {HomeComponent} from '../home/home.component'
import { FlightsDept } from '../shared/flights-dept.model';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {CarSearches} from '../shared/car-searches.model'
import {Payment} from '../shared/payment.model'
import {FlightBook} from '../shared/flight-book.model'

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  fname : string;
  surname : string;
  cardType : string;
  cardNO : string;
  code : string;
  date : any;
  names : any[100];
  bookID : any;
  

  constructor(private employeeService : EmployeeService,private router: Router) { }

  ngOnInit() {

    this.fname = localStorage.getItem('fname');
    this.surname = localStorage.getItem('surname');
    this.cardType = localStorage.getItem('cardType');
    this.cardNO = localStorage.getItem('cardNO');
    this.code = localStorage.getItem('code');
    this.date = localStorage.getItem('dte');

    this.employeeService.getPaidUsers();

  }

  show(emp : Payment)
  {
    this.bookID = emp.bookID;
    console.log("fgnfgm",this.bookID);
  }

}
