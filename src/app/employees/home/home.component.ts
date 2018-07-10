import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import {Employee} from  '../shared/employee.model'
import {Flights} from  '../shared/flights.model'

import {HotelsComponent} from '../hotels/hotels.component'
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dCity : string;
  deptDate : string;

  aCity : string;
  arrDate : string;
  travellers : string;
  log : any;
  showSpinner: boolean = true;
  city;



  constructor(private employeeService : EmployeeService,private router: Router) { }

  ngOnInit() {
    this.employeeService.getFlightsCity()
    
 
  }



  search() 
  { 
    this.dCity = ((document.getElementById("deptCity") as HTMLInputElement).value);
    this.deptDate = ((document.getElementById("dd") as HTMLInputElement).value);
    this.aCity = ((document.getElementById("arrCity") as HTMLInputElement).value);
    //this.arrDate = ((document.getElementById("rd") as HTMLInputElement).value);
    this.travellers = ((document.getElementById("trvls") as HTMLInputElement).value);
    
    //console.log(this.dCity,this.deptDate,this.aCity)
    localStorage.setItem("dCity",this.dCity);
    localStorage.setItem("deptDate",this.deptDate);
    localStorage.setItem("aCity",this.aCity);
    localStorage.setItem("arrDate",this.arrDate);
    localStorage.setItem("travellers",this.travellers);

    this.employeeService.getFlightsDept(this.dCity,this.deptDate,this.aCity);
    //this.city = this.employeeService.getFlightsDept(this.dCity,this.deptDate,this.aCity,this.arrDate);
    //this.city.subscribe(()=> this.showSpinner = false)

   if(this.employeeService.showDeptFlight.length < 1)
   {
     alert("No available flights match your search,please try again");
   } 
   else
   {
    this.router.navigate(['flight-search']);
   }


    if(this.dCity == this.aCity)
    {
      alert("Departure City can't be the same as the Arrival City");
    }
    else if(this.deptDate == "")
    {
      alert("Please enter departure date");
    }
    else if(this.travellers == '')
    {
      alert("Please fill all required fields");
    }


    }

  }

