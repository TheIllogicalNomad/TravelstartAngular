import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import {Employee} from  '../shared/employee.model'
import {HomeComponent} from '../home/home.component'
import { FlightsDept } from '../shared/flights-dept.model';
import { FlightBook } from '../shared/flight-book.model'
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {Traveller} from '../shared/traveller'


@Component({
  selector: 'app-flight-summary',
  templateUrl: './flight-summary.component.html',
  styleUrls: ['./flight-summary.component.css']
})
export class FlightSummaryComponent implements OnInit {

  dept : string;
  arr : string;
  dTime : string;
  aTime: string;
  cabin: string;
  totTime : string;
  stops : string;
  airL : string
  totPrice : any;
  dDate : string;
  aDate : string;

  fname : string;
  surname : string;
  cardType : string;
  cardNO : string;
  code : string;
  date : any;
  time : any;
  dte : any;
  flightID : string;
  seatNO : string;
  seatNO2 : string;

  constructor(private employeeService : EmployeeService,private router: Router) { }

  ngOnInit() {

    this.dept = localStorage.getItem('dept');
    this.arr = localStorage.getItem('arr');
    this.dTime = localStorage.getItem('dTime');
    this.aTime = localStorage.getItem('aTime');
    this.cabin = localStorage.getItem('cab');
    this.totTime = localStorage.getItem('totTime');
    this.stops = localStorage.getItem('stops');
    this.airL = localStorage.getItem('DairLine');
    this.totPrice = localStorage.getItem('calc');
    this.dDate = localStorage.getItem('deptDate');
    this.aDate = localStorage.getItem('arrDate');
    this.flightID = localStorage.getItem('dFlid');
    this.seatNO = localStorage.getItem('seatNO');
    this.seatNO2 = localStorage.getItem('seatNO2');
  
    this.resetForm();
  
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.reset();

      this.employeeService.bookFlight = {
        bookID : null,
        DeptCity : '',
        ArrCity : '',
        DeptTime : '',
        ArrTime : '',
        Cabin : '',
        Stops : '',
        TravelTime : '',
        FlightID : '',
        SeatNO : '',
        Total : '',
        UserID : null,
        payID : null,
        DeptDate : '',
        ArrDate : '',
        SeatNO2 : ''
      }
  
      this.employeeService.payment = {
        bookID : null,
        FirstName : '',
        Surname : '',
        CardType : '',
        SecurityCode : '',
        Price : '',
        UserId : null,
        AdminId : null,
        Date : '',
        CardNumber : '',
        PricePaid: '',
        DatePaid: ''
       
      }
    }
}
