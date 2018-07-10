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
    public class FlightDetailsController : ApiController
    {
        private FlightDEntitie db = new FlightDEntitie();

        // GET: api/FlightDetails
        public IQueryable<FlightDetail> GetFlightDetails()
        {
            return db.FlightDetails;
        }

        // GET: api/FlightDetails/5
        [ResponseType(typeof(FlightDetail))]

        public IQueryable<FlightDetail> GetFlightDetails(string dp, string dd, string ar)
        {
            //deptFlight deptFlight = db.deptFlights.FirstOrDefault(x => x.deptCity == dp & x.deptTime == dt);
            var departureFlight = db.FlightDetails.Where(x => x.DeptCity == dp & x.DeptDate == dd & x.ArrCity == ar);
            if (departureFlight == null)
            {
                return null;
            }

            return departureFlight;
        }
        public IHttpActionResult GetFlightDetail(int id)
        {
            FlightDetail flightDetail = db.FlightDetails.Find(id);
            if (flightDetail == null)
            {
                return NotFound();
            }

            return Ok(flightDetail);
        }

        // PUT: api/FlightDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutFlightDetail(int id, FlightDetail flightDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != flightDetail.IdFlight)
            {
                return BadRequest();
            }

            db.Entry(flightDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FlightDetailExists(id))
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

        // POST: api/FlightDetails
        [ResponseType(typeof(FlightDetail))]
        public IHttpActionResult PostFlightDetail(FlightDetail flightDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.FlightDetails.Add(flightDetail);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = flightDetail.IdFlight }, flightDetail);
        }

        // DELETE: api/FlightDetails/5
        [ResponseType(typeof(FlightDetail))]
        public IHttpActionResult DeleteFlightDetail(int id)
        {
            FlightDetail flightDetail = db.FlightDetails.Find(id);
            if (flightDetail == null)
            {
                return NotFound();
            }

            db.FlightDetails.Remove(flightDetail);
            db.SaveChanges();

            return Ok(flightDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FlightDetailExists(int id)
        {
            return db.FlightDetails.Count(e => e.IdFlight == id) > 0;
        }
    }
}