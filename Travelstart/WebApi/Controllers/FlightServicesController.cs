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
    public class FlightServicesController : ApiController
    {
        private FlightServiceEntities db = new FlightServiceEntities();

        // GET: api/FlightServices
        public IQueryable<FlightService> GetFlightServices()
        {
            return db.FlightServices;
        }

        // GET: api/FlightServices/5
        [ResponseType(typeof(FlightService))]
        public IHttpActionResult GetFlightService(int id)
        {
            FlightService flightService = db.FlightServices.Find(id);
            if (flightService == null)
            {
                return NotFound();
            }

            return Ok(flightService);
        }

        // PUT: api/FlightServices/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutFlightService(int id, FlightService flightService)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != flightService.FserviceID)
            {
                return BadRequest();
            }

            db.Entry(flightService).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FlightServiceExists(id))
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

        // POST: api/FlightServices
        [ResponseType(typeof(FlightService))]
        public IHttpActionResult PostFlightService(FlightService flightService)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.FlightServices.Add(flightService);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = flightService.FserviceID }, flightService);
        }

        // DELETE: api/FlightServices/5
        [ResponseType(typeof(FlightService))]
        public IHttpActionResult DeleteFlightService(int id)
        {
            FlightService flightService = db.FlightServices.Find(id);
            if (flightService == null)
            {
                return NotFound();
            }

            db.FlightServices.Remove(flightService);
            db.SaveChanges();

            return Ok(flightService);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FlightServiceExists(int id)
        {
            return db.FlightServices.Count(e => e.FserviceID == id) > 0;
        }
    }
}