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
  selector: 'app-confirm-book',
  templateUrl: './confirm-book.component.html',
  styleUrls: ['./confirm-book.component.css']
})
export class ConfirmBookComponent implements OnInit {

  name1 : string;
  surname1 : string;
  name2 : string;
  surname2 : string;
  dept : string;
  arr : string;
  dTime : string;
  aTime: string;
  cabin: string;
  dDate : string;
  aDate : string;
  flightID : string;
  seatNO : string;
  seatNO2 : string;
  aiport : string;
  airName : string;
  

  constructor() { }

  ngOnInit() {

    this.name1 = localStorage.getItem('trav1name');
    this.surname1 = localStorage.getItem('trav1surname');
    this.name2 = localStorage.getItem('trav2name');
    this.surname2 = localStorage.getItem('trav2surname');

    console.log(this.name2)

    this.dept = localStorage.getItem('dept');
    this.arr = localStorage.getItem('arr');
    this.dTime = localStorage.getItem('dTime');
    this.aTime = localStorage.getItem('aTime');
    this.cabin = localStorage.getItem('cab');
    this.dDate = localStorage.getItem('deptDate');
    this.aDate = localStorage.getItem('arrDate');
    this.flightID = localStorage.getItem('dFlid');
    this.seatNO = localStorage.getItem('seatNO');
    this.aiport = localStorage.getItem("airName");


    console.log(this.aiport);
  }

}
