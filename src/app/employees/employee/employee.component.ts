import { Component, OnInit } from '@angular/core';
import {Employee} from  '../shared/employee.model'
import { EmployeeService } from '../shared/employee.service'
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService : EmployeeService,private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.reset();

    this.employeeService.selectedEmployee = {
      UserID : null,
      Title : '',
      FirstName : '',
      Surname : '',
      EmailAddress : '',
      Password : '',
      MobileNO : '',
      Address : '',
      City : '',
      PostalCode :'',
      FlightNO : '',
      Age : ''
    }
  }

  onSubmit(form:NgForm){
    this.employeeService.postEmployees(form.value)
    .subscribe(data =>{
      this.resetForm(form); 
      alert("Registered.")
      this.router.navigate(['home']);
    })
  }

}
