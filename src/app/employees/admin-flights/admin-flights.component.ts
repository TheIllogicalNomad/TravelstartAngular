import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import {Employee} from  '../shared/employee.model'
import {HomeComponent} from '../home/home.component'
import { FlightsDept } from '../shared/flights-dept.model';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {CarSearches} from '../shared/car-searches.model'

@Component({
  selector: 'app-admin-flights',
  templateUrl: './admin-flights.component.html',
  styleUrls: ['./admin-flights.component.css']
})
export class AdminFlightsComponent implements OnInit {

  editID;
  deleteID;

  constructor(private employeeService : EmployeeService,private router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.employeeService.ViewFlights();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.reset();

   this.employeeService.addFlight = {
    IdFlight : null,
    DeptCity : '',
    DeptDate : '',
    ArrCity : '',
    ArrDate : '',
    DeptTime: '',
    ArrTime : '',
    Airline : '',
    Cabin : '',
    AirportName : '',
    Stops :'',
    Price : '',
    TotTime : '',
    FlightID : '',
    AirlinePicName : '',
    Travellers : '',
    UserID : null,
    SeatNO : '',
    FserviceID : null,
    way : ''
  }

}

edit(mm : FlightsDept)
{
  this.editID = mm.IdFlight;
  this.employeeService.addFlight = Object.assign({},mm);  
}

onSubmit(form:NgForm){
  /*if(this.editID == null)
  {
    this.employeeService.postFlights(form.value)
    .subscribe(data =>{
      this.resetForm(form); 
      alert("New Record inserted.")
    })

  }
  else
  {*/
    console.log(this.editID,form.value)
    this.employeeService.Flights(this.editID,form.value)
    .subscribe(data => {
      this.resetForm(form); 
      alert("Updated.")
    })
  //}

}
delete(mm : FlightsDept)
{
  this.deleteID = mm.IdFlight;
  console.log(this.deleteID)
  if(confirm('Are you sure you want to delete the record?') == true)
  {
    this.employeeService.deleteFlight(this.deleteID)
    .subscribe(x => {
      alert("Deleted.")
      window.location.reload();
    })
  }
  
}

}
