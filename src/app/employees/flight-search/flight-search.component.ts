import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import {Employee} from  '../shared/employee.model'
import {HomeComponent} from '../home/home.component'
import { FlightsDept } from '../shared/flights-dept.model';

import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [EmployeeService]
})
export class FlightSearchComponent implements OnInit {
  dCity : string;
  deptDate : string;
  
  aCity :string;
  retDate: string;
  travellers : string;

  //departures

  dept : string;
  arr : string;
  dTime : string;
  aTime : string;
  DairLine : string;
  dFlid : string;
  totTime : string;
  cab : string;
  stops : string;
  price : string;
  calc : any;
  id : any;
  seatNO : string;
  seatNO2 : string;
  dDate : string
  aDate : string;
  pic: string;
   

  constructor(private employeeService : EmployeeService,private router: Router) { }

  
  ngOnInit() {

    this.dCity = localStorage.getItem("dCity");
    this.deptDate = localStorage.getItem("deptDate");
    this.aCity = localStorage.getItem("aCity");
    this.retDate = localStorage.getItem("arrDate");

    this.travellers = localStorage.getItem("travellers");

    this.dTime = localStorage.getItem("dTime");
 
    this.employeeService.getFlightsDept(this.dCity,this.deptDate,this.aCity);

   
  }
  show(emp : FlightsDept )
  {
    this.dept = emp.DeptCity;
    this.arr = emp.ArrCity;
    this.dTime = emp.DeptTime;
    this.aTime = emp.ArrTime;
    this.DairLine = emp.Airline;
    this.dFlid = emp.FlightID;
    this.totTime = emp.TotTime;
    this.cab = emp.Cabin;
    this.stops = emp.Stops;
    this.price = emp.Price;
    this.id = emp.IdFlight;
    this.seatNO = emp.SeatNO;
    this.seatNO2 = emp.way;
    this.dDate = emp.DeptDate;
    this.aDate = emp.ArrDate;
    this.pic = emp.AirlinePicName;
    console.log(this.pic)
    
    this.calc = parseFloat(this.price) * parseFloat(this.travellers);
   
  }

  continue()
  {
    localStorage.setItem("dept",this.dept);
    localStorage.setItem("arr",this.arr);
    localStorage.setItem("dTime",this.dTime);
    localStorage.setItem("aTime",this.aTime);
    localStorage.setItem("DairLine",this.DairLine);
    localStorage.setItem("totTime",this.totTime);
    localStorage.setItem("cab",this.cab);
    localStorage.setItem("stops",this.stops);
    localStorage.setItem("calc",this.calc);
    localStorage.setItem("deptDate",this.deptDate);
    localStorage.setItem("retDate",this.retDate);
    localStorage.setItem("id",this.id);
    localStorage.setItem("dFlid",this.dFlid);
    localStorage.setItem("seatNO",this.seatNO);
    localStorage.setItem("seatNO2",this.seatNO2);
    localStorage.setItem("pic",this.pic);
    
    this.router.navigate(['after-search']);
  }
 

}
