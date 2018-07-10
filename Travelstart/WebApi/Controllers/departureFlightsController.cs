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
    public class departureFlightsController : ApiController
    {
        private DepartureFlightsEntities10 db = new DepartureFlightsEntities10();

        // GET: api/departureFlights
        public IQueryable<departureFlight> GetdepartureFlights()
        {
            return db.departureFlights;
        }

        // GET: api/departureFlights/5
        [ResponseType(typeof(departureFlight))]
        public IQueryable<departureFlight> GetdepartureFlight(string dp, string dd, string ar, string ad)
        {
            //deptFlight deptFlight = db.deptFlights.FirstOrDefault(x => x.deptCity == dp & x.deptTime == dt);
            var departureFlight = db.departureFlights.Where(x => x.deptCity == dp & x.deptDate == dd & x.arrCity == ar | x.arrDate == ad);
            if (departureFlight == null)
            {
                return null;
            }

            return departureFlight;
        }

        // PUT: api/departureFlights/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutdepartureFlight(int id, departureFlight departureFlight)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != departureFlight.id)
            {
                return BadRequest();
            }

            db.Entry(departureFlight).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!departureFlightExists(id))
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

        // POST: api/departureFlights
        [ResponseType(typeof(departureFlight))]
        public IHttpActionResult PostdepartureFlight(departureFlight departureFlight)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.departureFlights.Add(departureFlight);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = departureFlight.id }, departureFlight);
        }

        // DELETE: api/departureFlights/5
        [ResponseType(typeof(departureFlight))]
        public IHttpActionResult DeletedepartureFlight(int id)
        {
            departureFlight departureFlight = db.departureFlights.Find(id);
            if (departureFlight == null)
            {
                return NotFound();
            }

            db.departureFlights.Remove(departureFlight);
            db.SaveChanges();

            return Ok(departureFlight);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool departureFlightExists(int id)
        {
            return db.departureFlights.Count(e => e.id == id) > 0;
        }
    }
}