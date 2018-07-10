import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import {Employee} from  '../shared/employee.model'
import {HomeComponent} from '../home/home.component'
import { FlightsDept } from '../shared/flights-dept.model';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {CarSearches} from '../shared/car-searches.model'
import {Payment} from '../shared/payment.model'
import {FlightBook} from '../shared/flight-book.model'
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @ViewChild('content') content:ElementRef;

  bookID : any;

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
  flightID : string;
  seatNO : string;
  seatNO2 : string;
  airport : string;
  airName : string;

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
    this.airport = localStorage.getItem("airport");
    this.airName = localStorage.getItem("airName");

    this.bookID = localStorage.getItem('bookID');
    this.employeeService.getNameID(this.bookID);

    this.employeeService.getBookID(this.bookID)

    //console.log(this.bookID,this.dept,this.airName);

    for(var i = 0;i < this.employeeService.nameID.length;i++)
    {
      console.log(this.employeeService.nameID[i].FirstName);
    }
  }

  pdf()
  {
    console.log("gbnfgnfgn")
    this.router.navigate(['spinner']);
     
  }
}
