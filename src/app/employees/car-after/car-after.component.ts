import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import {Employee} from  '../shared/employee.model'
import {HomeComponent} from '../home/home.component'
import { FlightsDept } from '../shared/flights-dept.model';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {CarSearches} from '../shared/car-searches.model'

@Component({
  selector: 'app-car-after',
  templateUrl: './car-after.component.html',
  styleUrls: ['./car-after.component.css']
})
export class CarAfterComponent implements OnInit {

  pick : string;
  drop : string;
  d1 : any;
  d2 : any;
  t1 : string;
  t2 : string;
  airport : string;
  supp : string;
  spec : string;
  included : string;
  price : string;
  picName : string;
  pic : string;
  categ : string;
  days : string;

  startD :any;
  endD : any;
  dif : any;
  day : any;
  dayz : any;

  start : any;
  end : any;

  month : any;
  dy : any;
  yr : any;

  calc : any;


  constructor(private employeeService : EmployeeService,private router: Router) { }

  ngOnInit() {

    this.resetForm();

    this.pick = localStorage.getItem('pick');
    this.drop = localStorage.getItem('drop');
    this.d1 = localStorage.getItem('d1');
    this.d2 = localStorage.getItem('d2');
    this.t1 = localStorage.getItem('t1');
    this.t2 = localStorage.getItem('t2');
    this.airport = localStorage.getItem('airport');
    this.supp = localStorage.getItem('supp');
    this.spec = localStorage.getItem('spec');
    this.included = localStorage.getItem('included');
    this.price = localStorage.getItem('price');
    this.picName = localStorage.getItem('picName');
    this.pic = localStorage.getItem('pic');
    this.categ = localStorage.getItem('categ');
    this.days = localStorage.getItem('days');
    
    this.startD = new Date(this.d1);
    this.endD = new Date(this.d2);


   var mNum = this.startD.getMonth();
   var d = this.startD.getDay();
   var y = this.startD.getFullYear();
   this.start = this.GetMonthName(mNum) + d + "," + y;


   this.startD = new Date(this.start);
   this.endD = new Date(),
   console.log(this.endD)
   this.dif = 0,
   this.day = 1000 * 60 * 60 * 24;
   this.dif = this.startD - this.endD;
   this.dayz = Math.floor(this.dif/this.day);

    this.calc = parseFloat(this.price) * this.dayz;
    console.log(this.calc);
  }

  GetMonthName(num : any)
  {
    var nameMonths = ["January","February","March","April ","May","June","July","August ","September","October","November","December "];
    return nameMonths[num];
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
