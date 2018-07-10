import { Component, OnInit,Input } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import {Employee} from  '../shared/employee.model'
import {HomeComponent} from '../home/home.component'
import { FlightsDept } from '../shared/flights-dept.model';
import { FlightBook } from '../shared/flight-book.model'
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {Traveller} from '../shared/traveller'


@Component({
  selector: 'app-after-search',
  templateUrl: './after-search.component.html',
  styleUrls: ['./after-search.component.css']
})
export class AfterSearchComponent implements OnInit {

  dept : string;
  arr : string;
  dTime : string;
  aTime: string;
  cabin: string;
  totTime : string;
  stops : string;
  airL : string
  totPrice : any;
  dDate : string;
  aDate : string;
  travellers;

  fname : string;
  surname : string;
  cardType : string;
  cardNO : string;
  code : string;
  date : any;
  time : any;
  dte : any;
  flightID : string;
  seatNO1 : string;
  seatNO2 : string;

  trav1name : string;
  trav1surname : string;
  trav2name : string;
  trav2surname : string;
  cou : number = 0;
  airport : string;
  airName : string;

 @Input() seatList; 
  seat;
 public details;
 firstName;
 surName;
 list;
 count: number = -1;


  constructor(private employeeService : EmployeeService,private router: Router) { }

  ngOnInit() {

    this.seatList = [
      {seatA: '01A', seatB:'01B'},
      {seatA: '02A', seatB:'02B'},
      {seatA: '03A', seatB:'03B'},
      {seatA: '04A', seatB:'04B'},
      {seatA: '05A', seatB:'05B'},
      {seatA: '06A', seatB:'06B'},
      {seatA: '07A', seatB:'07B'},
      {seatA: '08A', seatB:'08B'},
      {seatA: '09A', seatB:'09B'},
      {seatA: '10A', seatB:'10B'},

    ]

    this.details = [
      {name: 'Thabiso',surname:'Seale',seatNumber:'01A'}
    ]

    


    this.dept = localStorage.getItem('dept');
    this.arr = localStorage.getItem('arr');
    this.dTime = localStorage.getItem('dTime');
    this.aTime = localStorage.getItem('aTime');
    this.cabin = localStorage.getItem('cab');
    this.totTime = localStorage.getItem('totTime');
    this.stops = localStorage.getItem('stops');
    this.airL = localStorage.getItem('DairLine');
    this.totPrice = localStorage.getItem('calc');
    this.dDate = localStorage.getItem('deptDate');
    this.aDate = localStorage.getItem('arrDate');
    this.flightID = localStorage.getItem('dFlid');
    //this.seatNO1 = localStorage.getItem('seatNO');
   // this.seatNO2 = localStorage.getItem('seatNO2');
    this.travellers = localStorage.getItem("travellers");
    this.airport = localStorage.getItem("airport");
    this.airName = localStorage.getItem("airName");

    //console.log(this.airName)
    


    this.resetForm();


  
  }

  select()
  {

    this.seat = ((document.getElementById("sit") as HTMLInputElement).value);
    //localStorage.setItem("seat",this.seat);
    //console.log(this.seat)
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.reset();

    this.employeeService.traveller = {
      userID : null,
      Title : '',
      FirstName : '',
      MiddleName : '',
      Surname : '',
      Email : '',
      DOB : '',
      MobileNO : '',
      payID : null,
      seatNO : ''
    }

  }


  onSubmit(form:NgForm)
  {
    /*const traveller = {
      seatNO : this.seat
    }

    this.employeeService.postTraveller(form.value)
    .subscribe(data =>{
      this.resetForm(form); 
      alert("Traveller(s) Added.")
    })*/

    this.firstName = ((document.getElementById("firstName") as HTMLInputElement).value);
    this.surName = ((document.getElementById("surName") as HTMLInputElement).value);

    this.details.push(
      {name: this.firstName,surname: this.surName,seatNumber:this.seat}
    )

    for(var i = 0;i < this.details.length;i++)
    {
      if(this.details[i]["name"] == 'Thabiso' && this.details[i]["surname"] == 'Seale' && this.details[i]["seatNumber"] == '01A')
      {
        this.details.splice(i,1);
        //console.log("cvbiocviob")
      }
    }

    for(var i = 0;i < this.seatList.length;i++)
    {
      if(this.seatList[i]["seatA"] == this.seat)
      {
        this.seatList.splice(i,1);
      }
    }

    //console.log(this.details)

    localStorage.setItem('list',JSON.stringify(this.details));

    this.count = this.count + 1;
    this.travellers = this.travellers - 1;
    if(this.count == this.travellers)
    {
      //console.log("dfgbfgbnfgbfgb")
      this.router.navigate(['pay']);
    }
    

  }


}


