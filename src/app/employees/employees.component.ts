import { Component, OnInit } from '@angular/core';

import {EmployeeService} from './shared/employee.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers : [EmployeeService]
})
export class EmployeesComponent implements OnInit {
  name : string;
  sname : string;
  log : string;
  isLogin : boolean = false;
  trip : string = "My Trips";
  

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {

    this.name = localStorage.getItem("name");
    this.sname = localStorage.getItem("sname");
    this.log = localStorage.getItem("yes");

    //console.log(this.log.length)
    //console.log(this.log)
    //alert(this.isLogin)

    if(this.log == "login")
    {
      this.isLogin = true; 
      this.trip = "";
    }
    else
    {
      this.trip = "My Trips";
    }

  }

  out()
  {
   this.isLogin = false;
    console.log(this.isLogin)
    localStorage.setItem("yes","out")
    window.location.reload();
  }

  check()
  {
    alert("bfdfb")
  }

}
