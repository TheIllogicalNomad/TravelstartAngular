import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import {Employee} from  '../shared/employee.model'
import {HomeComponent} from '../home/home.component'
import {CarSearches} from  '../shared/car-searches.model'
import { FlightsDept } from '../shared/flights-dept.model';
import{HotelSearch} from '../shared/hotel-search.model'
import{HotelDetails} from '../shared/hotel-details.model'
import{HotelPics} from '../shared/hotel-pics.model'
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { parse } from 'url';

@Component({
  selector: 'app-hotel-after',
  templateUrl: './hotel-after.component.html',
  styleUrls: ['./hotel-after.component.css']
})
export class HotelAfterComponent implements OnInit {

  dest : string;
  checkIn : string;
  checkOut : string;
  rums : string;
  nyt : string;
  pic : string;
  roomType : string;
  Landmark : string;
  name : string;
  address : string;
  near : string;
  price : string;
  id : any;
  included : string;
  calc : any;

  constructor(private employeeService : EmployeeService,private router: Router) { }

  ngOnInit() {

    this.resetForm();

    this.name = localStorage.getItem('name');
    this.dest = localStorage.getItem('dest');
    this.checkIn = localStorage.getItem('checkIn');
    this.checkOut = localStorage.getItem('checkOut');
    this.rums = localStorage.getItem('rums');
    this.nyt = localStorage.getItem('nyt');
    this.pic = localStorage.getItem('pic');
    this.roomType = localStorage.getItem('roomType');
    this.Landmark = localStorage.getItem('Landmark');
    this.name = localStorage.getItem('name');
    this.near = localStorage.getItem('near');
    this.price = localStorage.getItem('price');
    this.included = localStorage.getItem('included');
    this.address = localStorage.getItem('address');
    this.id = localStorage.getItem('id');

    this.calc = parseFloat(this.price) * parseFloat(this.rums) * parseFloat(this.nyt);

    this.employeeService.hotelPic(this.id);
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
    })
  }

}
