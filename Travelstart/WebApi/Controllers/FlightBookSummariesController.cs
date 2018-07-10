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
    public class FlightBookSummariesController : ApiController
    {
        private FlightBookEntities1 db = new FlightBookEntities1();

        // GET: api/FlightBookSummaries
        public IQueryable<FlightBookSummary> GetFlightBookSummaries()
        {
            return db.FlightBookSummaries;
        }

        // GET: api/FlightBookSummaries/5
        [ResponseType(typeof(FlightBookSummary))]
        public IQueryable<FlightBookSummary> GetFlightBookSummaries(int id)
        {
            var book = db.FlightBookSummaries.Where(x => x.payID == id);
            if (book == null)
            {
                return null;
            }
            return book;
        }

        // PUT: api/FlightBookSummaries/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutFlightBookSummary(int id, FlightBookSummary flightBookSummary)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != flightBookSummary.bookID)
            {
                return BadRequest();
            }

            db.Entry(flightBookSummary).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FlightBookSummaryExists(id))
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

        // POST: api/FlightBookSummaries
        [ResponseType(typeof(FlightBookSummary))]
        public IHttpActionResult PostFlightBookSummary(FlightBookSummary flightBookSummary)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.FlightBookSummaries.Add(flightBookSummary);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = flightBookSummary.bookID }, flightBookSummary);
        }

        // DELETE: api/FlightBookSummaries/5
        [ResponseType(typeof(FlightBookSummary))]
        public IHttpActionResult DeleteFlightBookSummary(int id)
        {
            FlightBookSummary flightBookSummary = db.FlightBookSummaries.Find(id);
            if (flightBookSummary == null)
            {
                return NotFound();
            }

            db.FlightBookSummaries.Remove(flightBookSummary);
            db.SaveChanges();

            return Ok(flightBookSummary);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FlightBookSummaryExists(int id)
        {
            return db.FlightBookSummaries.Count(e => e.bookID == id) > 0;
        }
    }
}