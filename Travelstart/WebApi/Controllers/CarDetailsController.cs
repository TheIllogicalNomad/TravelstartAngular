using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class CarDetailsController : ApiController
    {
        private CarDetailsEntities db = new CarDetailsEntities();

        // GET: api/CarDetails
        public IQueryable<CarDetail> GetCarDetails()
        {
            return db.CarDetails;
        }

        // GET: api/CarDetails/5
        [ResponseType(typeof(CarDetail))]

        public IQueryable<CarDetail> GetCarDetails(string pk,string df,string d1,string d2,string t1,string t2)
        {
            var car = db.CarDetails.Where(x => x.pickL == pk & x.dropL == df & x.pickD == d1 & x.dropD == d2 & x.pickT == t1 && x.dropT == t2);
            if (car == null)
            {
                return null;
            }
            return car;
        }
    

        // PUT: api/CarDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCarDetail(int id, CarDetail carDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != carDetail.carID)
            {
                return BadRequest();
            }

            db.Entry(carDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/CarDetails
        [ResponseType(typeof(CarDetail))]
        public IHttpActionResult PostCarDetail(CarDetail carDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CarDetails.Add(carDetail);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = carDetail.carID }, carDetail);
        }

        // DELETE: api/CarDetails/5
        [ResponseType(typeof(CarDetail))]
        public IHttpActionResult DeleteCarDetail(int id)
        {
            CarDetail carDetail = db.CarDetails.Find(id);
            if (carDetail == null)
            {
                return NotFound();
            }

            db.CarDetails.Remove(carDetail);
            db.SaveChanges();

            return Ok(carDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CarDetailExists(int id)
        {
            return db.CarDetails.Count(e => e.carID == id) > 0;
        }
    }
}