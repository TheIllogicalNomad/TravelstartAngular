//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApi.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class FlightDetail
    {
        public int IdFlight { get; set; }
        public string DeptCity { get; set; }
        public string DeptDate { get; set; }
        public string DeptTime { get; set; }
        public string ArrCity { get; set; }
        public string ArrDate { get; set; }
        public string ArrTime { get; set; }
        public string Airline { get; set; }
        public string AirportName { get; set; }
        public string Travellers { get; set; }
        public string SeatNO { get; set; }
        public string Price { get; set; }
        public string Cabin { get; set; }
        public string Stops { get; set; }
        public string FlightID { get; set; }
        public Nullable<int> UserID { get; set; }
        public Nullable<int> FserviceID { get; set; }
        public string AirlinePicName { get; set; }
        public string TotTime { get; set; }
        public string way { get; set; }
    }
}