import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import {Employee} from  '../shared/employee.model'
import {HomeComponent} from '../home/home.component'
import { FlightsDept } from '../shared/flights-dept.model';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {CarSearches} from '../shared/car-searches.model'
import {Payment} from '../shared/payment.model'
import {FlightBook} from '../shared/flight-book.model'

@Component({
  selector: 'app-flight-book',
  templateUrl: './flight-book.component.html',
  styleUrls: ['./flight-book.component.css']
})
export class FlightBookComponent implements OnInit {

  bookID : any;

  constructor(private employeeService : EmployeeService,private router: Router) { }

  ngOnInit() {
  
    this.employeeService.getPaidUsers();

  }

  show(emp : Payment)
  {
    this.bookID = emp.bookID;
    console.log("gdbnfgn",this.bookID)
    this.employeeService.getBookID(this.bookID);
  }

  submit()
  {
    localStorage.setItem("bookID",this.bookID);
    console.log(this.bookID)
    this.employeeService.getNameID(this.bookID);
    this.router.navigate(['message']);
    /*if(this.employeeService.nameID.length > 1)
    {
      this.router.navigate(['message']);
    }*/
    
    window.location.reload();

  }
}
