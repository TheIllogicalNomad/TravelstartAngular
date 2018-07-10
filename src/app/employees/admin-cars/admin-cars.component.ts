import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import {Employee} from  '../shared/employee.model'
import {HomeComponent} from '../home/home.component'
import { FlightsDept } from '../shared/flights-dept.model';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {CarSearches} from '../shared/car-searches.model'

@Component({
  selector: 'app-admin-cars',
  templateUrl: './admin-cars.component.html',
  styleUrls: ['./admin-cars.component.css']
})
export class AdminCarsComponent implements OnInit {

  constructor(private employeeService : EmployeeService,private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.reset();

  this.employeeService.addCar = {
    id : null,
    pickL : '',
    dropL : '',
    pickD : '',
    dropD : '',
    pickT: '',
    dropT : '',
    airportName : '',
    picName : '',
    carName : '',
    passengers :'',
    luggage : '',
    doors : '',
    spec : '',
    included : '',
    price : '',
    category : null,
    supplier : '',
    daysRent : null,
   
  }
}

onSubmit(form:NgForm){
  this.employeeService.postCars(form.value)
  .subscribe(data =>{
    this.resetForm(form); 
    alert("Registered.")
  })

}

}
