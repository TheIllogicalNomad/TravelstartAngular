import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service'
import {Employee} from  '../shared/employee.model'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  index : any;
  name : string;
  sname : string;

  userId : any;
  email : string;
  password : string;
  isLogin : boolean = false;
  yes : string;

  constructor(private employeeService : EmployeeService,private router: Router) { }

  ngOnInit() {
    this.employeeService.getUser();
    this.yes = "out";

  }

  loginUser()
  {
  

    this.email = ((document.getElementById("email") as HTMLInputElement).value);
    this.password = ((document.getElementById("password") as HTMLInputElement).value);
    //var length = ;

      for(var i = 0; this.employeeService.showUser.length ;i++)
      {
        //console.log(this.employeeService.showUser[i].EmailAddress);
        if(this.email == this.employeeService.showUser[i].EmailAddress && this.password == this.employeeService.showUser[i].Password)
        {
          alert('Successfully logged in.')
          this.index = i;
          this.name =  this.employeeService.showUser[i]["FirstName"];
          this.sname = this.employeeService.showUser[i]["Surname"];  
          //this.userId = this.employeeService.showUser[i].UserID;    
          this.router.navigate(['home']);
          this.yes = "login"
      }  
      else
      {
        //alert('Wrong password or email address')
         break;
      } 

      }

    console.log(this.name,this.sname,this.yes);
    localStorage.setItem("name",this.name);
    localStorage.setItem("sname",this.sname);
    localStorage.setItem("yes",this.yes);
    
    window.location.reload();
  }

  


}