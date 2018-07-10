import { Component, OnInit } from '@angular/core';
import {CarSearches} from  '../shared/car-searches.model'
import {CarServ} from  '../shared/carServ.model'
import { EmployeeService } from '../shared/employee.service'
import {Flights} from  '../shared/flights.model'
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
 
})
export class CarsComponent implements OnInit {

  date1 = ['00:00','00:30','01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30','06:00','06:30','07:00','07:30','08:00'];

  pickL : string;
  dropL : string;
  pickT : string;
  dropT : string;
  pickD : string;
  dropD : string;

  constructor(private employeeService : EmployeeService,private router: Router) { }

  ngOnInit() {
    this.employeeService.getCarCity();
  }

  search()
  {
    this.pickL = ((document.getElementById("pickUp") as HTMLInputElement).value);
    localStorage.setItem("pickL",this.pickL);

    this.dropL = ((document.getElementById("dropOff") as HTMLInputElement).value);
    localStorage.setItem("dropL",this.dropL);

    this.pickT = ((document.getElementById("time1") as HTMLInputElement).value);
    localStorage.setItem("pickT",this.pickT);

    this.dropT = ((document.getElementById("time2") as HTMLInputElement).value);
    localStorage.setItem("dropT",this.dropT);

    this.pickD = ((document.getElementById("dp") as HTMLInputElement).value);
    localStorage.setItem("pickD",this.pickD);

    this.dropD = ((document.getElementById("df") as HTMLInputElement).value);
    localStorage.setItem("dropD",this.dropD);

    this.employeeService.getCarSearched(this.pickL,this.dropL,this.pickD,this.dropD,this.pickT,this.dropT);


    if(this.employeeService.showCarSearched.length < 1)
    {
      alert("No available cars match your search,please try again");
    } 
    else
    {
      this.router.navigate(['car-search']);
    }

    if(this.pickL == this.pickD)
    {
      alert("Pick Up Location can't be the same as the Drop Off Location");
    }
    else if(this.pickD == this.dropD)
    {
      alert("Pick Up Date can't be the same as the Drop Off Date");
    }
    else if(this.pickT == this.dropT)
    {
      alert("Pick Up Time can't be the same as the Drop Off Time");
    }
 
  }

}




