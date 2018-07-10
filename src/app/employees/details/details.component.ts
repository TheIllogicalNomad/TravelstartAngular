import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import {Employee} from  '../shared/employee.model';
import {HomeComponent} from '../home/home.component';
import { FlightsDept } from '../shared/flights-dept.model';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {CarSearches} from '../shared/car-searches.model'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  name : string;
  sname : string;
  id : any;

  constructor(private employeeService : EmployeeService,private router: Router) { }

  ngOnInit() {

    this.name = localStorage.getItem("name");
    this.sname = localStorage.getItem("sname");
    this.employeeService.getUserNames(this.name,this.sname);
    this.resetForm();
  }

  check(kk : Employee)
  {
    this.id = kk.UserID;
    this.employeeService.selectedEmployee = Object.assign({},kk);
    //console.log("fgnfgh",this.id)
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
    
    if(form.value.UserID == null)
    {

    this.employeeService.putEmployees(this.id,form.value)
    .subscribe(data => {
      this.resetForm(form); 
      alert("Updated.")
    })
          
  }
  
}

}
