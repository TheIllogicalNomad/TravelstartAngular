import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import{HttpModule} from '@angular/http'
import {RouterModule, Routes} from '@angular/router';



import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { HomeComponent } from './employees/home/home.component';
import { NaviComponent } from  './employees/navi/navi.component';
import { HotelsComponent } from './employees/hotels/hotels.component';
import { CarsComponent } from './employees/cars/cars.component';
import { PackagesComponent } from './employees/packages/packages.component';
import { AdminComponent } from './employees/admin/admin.component';
import { FlightSearchComponent } from './employees/flight-search/flight-search.component';
import { AfterSearchComponent } from './employees/after-search/after-search.component';
import { AdminHomeComponent } from './employees/admin-home/admin-home.component'
import { AdminFlightsComponent } from './employees/admin-flights/admin-flights.component';
import { AdminHotelsComponent } from './employees/admin-hotels/admin-hotels.component';
import { AdminCarsComponent } from './employees/admin-cars/admin-cars.component';
import { CarSearchComponent } from './employees/car-search/car-search.component';
import { CarAfterComponent } from './employees/car-after/car-after.component';
import { HotelSearchComponent } from './employees/hotel-search/hotel-search.component';
import { HotelAfterComponent } from './employees/hotel-after/hotel-after.component';
import { FlightBookComponent } from './employees/flight-book/flight-book.component';
import { FlightSummaryComponent } from './employees/flight-summary/flight-summary.component';
import { ConfirmBookComponent } from './employees/confirm-book/confirm-book.component'
import { DashboardComponent } from './employees/dashboard/dashboard.component';
import { DetailsComponent } from './employees/details/details.component';
import { MessageComponent } from './employees/message/message.component';
import { SpinnerComponent } from './employees/spinner/spinner.component';
import { PayComponent } from './employees/pay/pay.component'


const appRoutes: Routes = [
  {path : 'home',component: HomeComponent},
  
  {path : 'employee',component: EmployeeComponent},
  {path : 'employee-list',component: EmployeeListComponent},
  {path : 'navi',component: NaviComponent},
  {path : 'hotels',component: HotelsComponent},
  {path : 'cars',component: CarsComponent},
  {path : 'after-search',component: AfterSearchComponent},
  {path : 'packages',component: PackagesComponent},
  {path : 'admin',component: AdminComponent},
  {path : 'flight-search',component: FlightSearchComponent},
  {path : 'admin-flights',component: AdminFlightsComponent},
  {path : 'admin-cars',component: AdminCarsComponent},
  {path : 'admin-hotels',component: AdminHotelsComponent},
  {path : 'admin-home',component: AdminHomeComponent},
  {path : 'car-search',component: CarSearchComponent},
  {path : 'car-after',component: CarAfterComponent},
  {path : 'hotel-search',component: HotelSearchComponent},
  {path : 'hotel-after',component: HotelAfterComponent},
  {path : 'confirm-book',component: ConfirmBookComponent},
  {path : 'details',component: DetailsComponent},
  {path : 'flight-book',component: FlightBookComponent},
  {path : 'message',component: MessageComponent},
  {path : 'dashboard',component: DashboardComponent},
  {path : 'pay',component: PayComponent},
  {path : 'spinner',component: SpinnerComponent},
  {path : '',redirectTo: '/home', pathMatch: 'full'},
  {path : '**',redirectTo: '/home', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,

    NaviComponent,
    HomeComponent,
    HotelsComponent,
    CarsComponent,
    PackagesComponent,
    AdminComponent,
    FlightSearchComponent,
    AfterSearchComponent,
    AdminHomeComponent,
    AdminFlightsComponent,
    AdminHotelsComponent,
    AdminCarsComponent,
    CarSearchComponent,
    CarAfterComponent,
    HotelSearchComponent,
    HotelAfterComponent,
    FlightBookComponent,
    FlightSummaryComponent,
    ConfirmBookComponent,
    DashboardComponent,
    DetailsComponent,
    MessageComponent,
    SpinnerComponent,
    PayComponent

  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule,RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
