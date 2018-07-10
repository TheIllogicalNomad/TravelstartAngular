import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import {Employee} from  '../shared/employee.model'
import {HomeComponent} from '../home/home.component'
import {CarSearches} from  '../shared/car-searches.model'
import { FlightsDept } from '../shared/flights-dept.model';
import{HotelSearch} from '../shared/hotel-search.model'
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  des : string;
  in : string;
  out : string;
  room : string;
  night : string;

  constructor(private employeeService : EmployeeService,private router: Router) { }

  ngOnInit() {

    
   this.employeeService.getHotel();
    this.employeeService.getHotelView();
    
  }

  SearchHotel()
  {
    this.des = ((document.getElementById("des") as HTMLInputElement).value);
    this.in = ((document.getElementById("dp") as HTMLInputElement).value);
    this.out = ((document.getElementById("df") as HTMLInputElement).value);
    this.room = ((document.getElementById("room") as HTMLInputElement).value);
    this.night = ((document.getElementById("ni") as HTMLInputElement).value);
 
    localStorage.setItem("des",this.des);
    localStorage.setItem("in",this.in);
    localStorage.setItem("out",this.out);
    localStorage.setItem("room",this.room);
    localStorage.setItem("night",this.night);

    this.employeeService.getHotelSearched(this.des,this.in,this.out);


    if(this.employeeService.showHotelSearched.length < 1)
    {
      alert("No available hotels match your search,please try again");
    } 
    else
    {
      this.router.navigate(['hotel-search']);
    }

   if(this.in == this.out)
    {
      alert("Book In Date can't be the same as the Book Out Date");
    }
    else if(this.out == '' || this.room == '' || this.night == '')
    {
      alert("Please fill all required fields");
    }

 
  }
}
