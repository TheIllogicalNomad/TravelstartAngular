import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import {Employee} from  '../shared/employee.model'
import {HomeComponent} from '../home/home.component'
import {CarSearches} from  '../shared/car-searches.model'
import { FlightsDept } from '../shared/flights-dept.model';
import{HotelSearch} from '../shared/hotel-search.model'
import{HotelDetails} from '../shared/hotel-details.model'
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css']
})
export class HotelSearchComponent implements OnInit {
  des : string;
  in : string;
  out : string;
  room : string;
  night : string;

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

  constructor(private employeeService : EmployeeService,private router: Router) { }

  ngOnInit() 
  {
    this.des = localStorage.getItem("des");
    this.in = localStorage.getItem("in");
    this.out = localStorage.getItem("out");
    this.room = localStorage.getItem("room");
    this.night = localStorage.getItem("night");

    this.employeeService.getHotelSearched(this.des,this.in,this.out);
  }

  show(emp : HotelDetails)
  {
    this.dest = emp.Destination;
    this.checkIn = emp.InDate;
    this.checkOut = emp.OutDate;
    this.rums = emp.Rooms;
    this.nyt = emp.Nights;
    this.pic = emp.HotelPic;
    this.roomType = emp.RoomType;
    this.Landmark = emp.Landmark;
    this.name = emp.HotelName;
    this.address = emp.HotelAddress;
    this.near = emp.Near;
    this.price = emp.Star;
    this.included = emp.Included;
    this.id = emp.HotelId;

    //console.log("id:",this.id);

    localStorage.setItem("dest",this.dest);
    localStorage.setItem("checkIn",this.checkIn);
    localStorage.setItem("checkOut",this.checkOut);
    localStorage.setItem("rums",this.rums);
    localStorage.setItem("nyt",this.nyt);
    localStorage.setItem("pic",this.pic);
    localStorage.setItem("roomType",this.roomType);
    localStorage.setItem("Landmark",this.Landmark);
    localStorage.setItem("name",this.name);
    localStorage.setItem("price",this.price);
    localStorage.setItem("address",this.address);
    localStorage.setItem("near",this.near);
    localStorage.setItem("included",this.included);
    localStorage.setItem("id",this.id);

    this.router.navigate(['hotel-after']);
  }
}
