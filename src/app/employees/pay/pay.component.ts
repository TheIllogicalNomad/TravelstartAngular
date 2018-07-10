import { Component, OnInit,Input } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import {Employee} from  '../shared/employee.model'
import {HomeComponent} from '../home/home.component'
import { FlightsDept } from '../shared/flights-dept.model';
import { FlightBook } from '../shared/flight-book.model'
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {Traveller} from '../shared/traveller'

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

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
  travellers;

  fname : string;
  surname : string;
  cardType : string;
  cardNO : string;
  code : string;
  date : any;
  time : any;
  dte : any;
  flightID : string;
  airport : string;
  airName : string;
  list;

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
    this.travellers = localStorage.getItem("travellers");
    this.airport = localStorage.getItem("airport");
    this.airName = localStorage.getItem("airName");
    

    this.resetForm();
    this.list = JSON.parse(localStorage.getItem("list"));
    console.log(this.list)
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

  onSubmit(form:NgForm)
  {
    
  /* const flightdetails = {

      DeptCity: this.dept,
      ArrCity : this.arr,
      DeptDate : this.dDate,
      ArrDate : this.aDate,
      DeptTime : this.dTime,
      ArrTime : this.aTime,
      Cabin : this.cabin,
      Stops : this.stops,
      TravelTime : this.totTime,
      FlightID : this.flightID,
      Total : this.totPrice,
      UserID : null,
      payID : null,  
    }

    const paying = {
      PricePaid : this.totPrice
    }

    /*this.employeeService.postFlightBook(form.value)
    .subscribe(data =>{
      this.resetForm(form); 
    })

    this.date = new Date();*/

    /*this.employeeService.postPayment(form.value)
    .subscribe(data =>{
      this.resetForm(form); 
      alert("Paying")
    })*/

    this.router.navigate(['navi']);
   }
}
