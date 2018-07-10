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
    public class CarSearchesController : ApiController
    {
        private CarSearchEntity db = new CarSearchEntity();

        // GET: api/CarSearches
        public IQueryable<CarSearch> GetCarSearches()
        {
            return db.CarSearches;
        }

        // GET: api/CarSearches/5
        [ResponseType(typeof(CarSearch))]
        //var car = db.CarSearches.Where(x => x.pickUpL == pk & x.dropOffL == df & x.pickUpD == d1 & x.dropOffD == d2 & x.pickUpT == t1 && x.dropOffT == t2);

        public IQueryable<CarSearch> GetCarSearch(string pk, string df, string d1, string d2,string t1,string t2)
        {
            var car = db.CarSearches.Where(x => x.pickUpL == pk & x.dropOffL == df & x.dropOffL == df & x.pickUpD == d1 & x.dropOffD == d2 & x.pickUpT == t1 && x.dropOffT == t2);
            if (car == null)
            {
                return null;
            }
            return car;
        }
		
		 

        // PUT: api/CarSearches/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCarSearch(int id, CarSearch carSearch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != carSearch.id)
            {
                return BadRequest();
            }

            db.Entry(carSearch).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarSearchExists(id))
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

        // POST: api/CarSearches
        [ResponseType(typeof(CarSearch))]
        public IHttpActionResult PostCarSearch(CarSearch carSearch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CarSearches.Add(carSearch);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = carSearch.id }, carSearch);
        }

        // DELETE: api/CarSearches/5
        [ResponseType(typeof(CarSearch))]
        public IHttpActionResult DeleteCarSearch(int id)
        {
            CarSearch carSearch = db.CarSearches.Find(id);
            if (carSearch == null)
            {
                return NotFound();
            }

            db.CarSearches.Remove(carSearch);
            db.SaveChanges();

            return Ok(carSearch);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CarSearchExists(int id)
        {
            return db.CarSearches.Count(e => e.id == id) > 0;
        }
    }
}