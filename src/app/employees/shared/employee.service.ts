import {Injectable } from '@angular/core';
import{Http,Response,Headers,RequestOptions,RequestMethod} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import{Employee} from './employee.model'
import{Flights} from './flights.model'
import{FlightsDept} from './flights-dept.model'
import{CarSearches} from './car-searches.model'
import{CarServ} from './carServ.model'
import{HotelSearch} from './hotel-search.model'
import{HotelDetails} from './hotel-details.model'
import{HotelPics} from './hotel-pics.model'
import{FlightBook} from './flight-book.model'
import{Payment} from './payment.model'
import {Traveller} from './traveller'

@Injectable()
export class EmployeeService {

  selectedEmployee : Employee;
  addFlight : FlightsDept;
  addHotel : HotelDetails;
  addCar : CarSearches;
  bookFlight : FlightBook;
  payment : Payment;
  traveller : Traveller;


  showUser : Employee[];
  selectedUser : Employee;
  showCities : Flights[];
  showDeptFlight : FlightsDept[];
  ViewFlight : FlightsDept[];
  showCarSearched: CarSearches[]
  showCar: CarServ[];
  showHotels : HotelSearch[];
  showHotelSearched : HotelDetails[];
  showHotelPics : HotelPics[];
  hotelView : HotelDetails[];
  flightBook : FlightBook[];
  paidUser : Payment[];
  bookID : FlightBook[];
  getUserName : Employee[];
  nameID : Traveller[];

  readonly rootURL = 'http://http://localhost:5111'

  constructor(private http : Http) { }

  //Insert UserInfo in the database

  /*registerUser(user : Employee)
  {
    const body: Employee = {
      UserID : user.UserID,
      Title : user.Title,
        FirstName : user.FirstName,
        Surname : user.Surname,
        Password : user.Password,
        EmailAddress : user.EmailAddress,
        MobileNO : user.MobileNO,
        Address : user.Address,
        City : user.City,
        PostalCode : user.PostalCode,
        FlightNO : user.FlightNO,
        Age : user.Age
    }
    return this.http.post(this.rootURL + '/api/User/Register',body);
  }*/

  postEmployees(emp : Employee){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type' : 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions}); 
    return this.http.post('http://localhost:13641/api/UserInfo',body,requestOptions).map(x => x.json());
  }

  putEmployees(id,emp){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type' : 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Put,headers : headerOptions}); 
    return this.http.put('http://localhost:13641/api/UserInfo/' + id,
       body,
       requestOptions).map(res => res.json());
  }

    Flights(id,kk){
    var body = JSON.stringify(kk);
    var headerOptions = new Headers({'Content-Type' : 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Put,headers : headerOptions}); 
    return this.http.put('http://localhost:13641/api/FlightDetails/' + id,
       body,
       requestOptions).map(res => res.json());
      
  }

  deleteFlight(id : number)
  {
    return this.http.delete('http://localhost:13641/api/FlightDetails/'+id).map(res => res.json())
  }


  postFlights(emp : FlightsDept){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type' : 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions}); 
    return this.http.post('http://localhost:13641/api/FlightDetails',body,requestOptions).map(x => x.json());
  }

  postHotels(emp : HotelDetails){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type' : 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions}); 
    return this.http.post('http://localhost:13641/api/HotelDetails',body,requestOptions).map(x => x.json());
  }

  postCars(emp : CarSearches){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type' : 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions}); 
    return this.http.post('http://localhost:13641/api/CarDetails',body,requestOptions).map(x => x.json());
  }

  postFlightBook(emp : FlightBook){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type' : 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions}); 
    return this.http.post('http://localhost:13641/api/FlightBookSummaries',body,requestOptions).map(x => x.json());
  }

  postPayment(emp : Payment){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type' : 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions}); 
    return this.http.post('http://localhost:13641/api/Payments2',body,requestOptions).map(x => x.json());
  }

  postTraveller(emp : Traveller){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type' : 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions}); 
    return this.http.post('http://localhost:13641/api/FlightUsers1',body,requestOptions).map(x => x.json());
  }


//Get User Info

  getUser()
  {
    this.http.get('http://localhost:13641/api/UserInfo')
    .map((data :Response) =>{
      return data.json() as Employee[];
    }).toPromise().then(x => {
      this.showUser = x;
    })
  }

  getUserNames(name: string,sname: string)
  {
    this.http.get('http://localhost:13641/api/UserInfo?name='+name+'&sname='+sname)
    .map((data :Response) =>{
      return data.json() as Employee[];
    }).toPromise().then(x => {
      this.getUserName = x;
    })
  }

  hotelPic(id : number)
  {
    this.http.get('http://localhost:13641/api/HotelPics?id='+id)
    .map((data :Response) =>{
      return data.json() as HotelPics[];
    }).toPromise().then(x => {
      this.showHotelPics = x;
    })
  }

  getBookID(id : number)
  {
    this.http.get('http://localhost:13641/api/FlightBookSummaries?id='+id)
    .map((data :Response) =>{
      return data.json() as FlightBook[];
    }).toPromise().then(x => {
      this.bookID = x;
    })
  }


//Get Places when searching 

  getFlightsCity()
  {
    this.http.get('http://localhost:13641/api/FlightServices')
    .map((data :Response) =>{
      return data.json() as Flights[];
    }).toPromise().then(x => {
      this.showCities = x;
    })
  }

//Search and get flights searched

  getFlightsDept(dp:string,dd:string,ar: string)
  {
    this.http.get('http://localhost:13641/api/FlightDetails?dp='+dp+'&dd='+dd+'&ar='+ar)
    .map((data :Response) =>{
      return data.json() as FlightsDept[];
    }).toPromise().then(x => {
      this.showDeptFlight = x;
    })
  }

   ViewFlights()
  {
    this.http.get('http://localhost:13641/api/FlightDetails')
    .map((data :Response) =>{
      return data.json() as FlightsDept[];
    }).toPromise().then(x => {
      this.ViewFlight = x;
    })
  }


//Search and get cars searched

 getCarSearched(pk:string,df:string,d1:string,d2:string,t1: string,t2: string)
  {
    this.http.get('http://localhost:13641/api/CarDetails?pk='+pk+'&df='+df+'&d1='+d1+'&d2='+d2+'&t1='+t1+'&t2='+t2)
    .map((data :Response) =>{
      return data.json() as CarSearches[];
    }).toPromise().then(x => {
      this.showCarSearched = x;
    })
  }

  //Get Car Places when searching 

  getCarCity()
  {
    this.http.get('http://localhost:13641/api/CarServices')
    .map((data :Response) =>{
      return data.json() as CarServ[];
    }).toPromise().then(x => {
      this.showCar = x;
    })
  }

  //Show hotels to search

 getHotel()
 {
   this.http.get('http://localhost:13641/api/HotelServices')
   .map((data :Response) =>{
     return data.json() as HotelSearch[];
   }).toPromise().then(x => {
     this.showHotels = x;
   })
 }

 getHotelSearched(des : string,d1 : string,d2 : string)
 {
    this.http.get('http://localhost:13641/api/HotelDetails?des='+des+"&&d1="+d1+"&&d2="+d2)
    .map((data :Response) =>{
      return data.json() as HotelDetails[];
    }).toPromise().then(x => {
      this.showHotelSearched = x;
    })
 }

 getHotelView()
 {
    this.http.get('http://localhost:13641/api/HotelDetails')
    .map((data :Response) =>{
      return data.json() as HotelDetails[];
    }).toPromise().then(x => {
      this.hotelView = x;
    })
 }

 getPaidUsers()
 {
    this.http.get('http://localhost:13641/api/Payments2')
    .map((data :Response) =>{
      return data.json() as Payment[];
    }).toPromise().then(x => {
      this.paidUser = x;
    })
 }

 getNameID(id : number)
 {
    this.http.get('http://localhost:13641/api/FlightUsers1?id='+id)
    .map((data :Response) =>{
      return data.json() as Traveller[];
    }).toPromise().then(x => {
      this.nameID = x;
    })
 }



}

