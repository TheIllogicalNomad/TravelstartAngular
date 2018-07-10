import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { EmployeeService } from '../shared/employee.service'
import {Employee} from  '../shared/employee.model'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router,private employeeService : EmployeeService) { }

  ngOnInit() {
    this.employeeService.getUser()
  }

  loginUser(e)
  {
    e.preventDefault();
    var email = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if(email == 'admin' && password == 'admin')
    {
      this.router.navigate(['admin-home']);
    }else 
    {
      alert("Wrong password or email address");
    }
  }

}
