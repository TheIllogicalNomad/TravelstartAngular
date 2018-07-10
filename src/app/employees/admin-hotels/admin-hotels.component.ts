import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import {Employee} from  '../shared/employee.model'
import {HomeComponent} from '../home/home.component'
import { FlightsDept } from '../shared/flights-dept.model';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {CarSearches} from '../shared/car-searches.model'
import {HotelDetails} from '../shared/hotel-details.model'

@Component({
  selector: 'app-admin-hotels',
  templateUrl: './admin-hotels.component.html',
  styleUrls: ['./admin-hotels.component.css']
})
export class AdminHotelsComponent implements OnInit {

  constructor(private employeeService : EmployeeService,private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.reset();

   this.employeeService.addHotel = {
    HotelId : null,
    InDate : '',
    OutDate : '',
    Rooms : '',
    Nights : '',
    HotelPic: '',
    Star : '',
    RoomType : '',
    Landmark : '',
    Destination : '',
    HotelName :'',
    HotelAddress : '',
    Included : '',
    Near : '', 
  }

}

  onSubmit(form:NgForm){
    this.employeeService.postHotels(form.value)
    .subscribe(data =>{
      this.resetForm(form); 
      alert("Registered.")
    })

  }
}
