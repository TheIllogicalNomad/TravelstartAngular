using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication.Models
{
    public class AccountModel
    {
        public int UserID { get; set; }
        public string Title { get; set; }
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public string DOB { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }
        public string MobileNO { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public string FlightNO { get; set; }
        public string Age { get; set; }
        public string UserName { get; internal set; }
        public string Email { get; internal set; }
        public object LastName { get; internal set; }
    }
}