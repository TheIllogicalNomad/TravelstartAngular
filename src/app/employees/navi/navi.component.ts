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
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {

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
  travellers : string;
  airport : string;
  airName : string;
  list;
  pic : string;
  
  flightID : string;
  constructor() { }

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
    //this.seatNO1 = localStorage.getItem('seatNO');
    this.pic = localStorage.getItem('pic');
    this.travellers = localStorage.getItem("travellers");
    this.airport = localStorage.getItem("airport");
    this.airName = localStorage.getItem("airName");

    this.list = JSON.parse(localStorage.getItem("list"));

    //console.log(this.pic);
  }
 /* this.employeeService.addFlight = {
    IdFlight : null,
    DeptCity : '',
    DeptDate : '',
    ArrCity : '',
    ArrDate : '',
    ArrTime : '',
    Airline : '',
    Cabin : '',
    AirportName : '',
    Stops :'',
    Price : '',
    TotTime : '',
    FlightID : '',
    AirlinePicName : '',
    Travellers : '',
    UserID :'',
    SeatNO : '',
    FserviceID : ''
  }
}

onSubmit(form:NgForm){
  this.employeeService.postEmployees(form.value)
  .subscribe(data =>{
    this.resetForm(form); 
    alert("Registered.")
  })*/

}
