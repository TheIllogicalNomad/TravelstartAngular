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
    public class FlightUsers1Controller : ApiController
    {
        private useFEntities db = new useFEntities();

        // GET: api/FlightUsers1
        public IQueryable<FlightUser> GetFlightUsers()
        {
            return db.FlightUsers;
        }

        // GET: api/FlightUsers1/5
        [ResponseType(typeof(FlightUser))]
        public IQueryable<FlightUser> GetFlightUsers(int id)
        {
            var user = db.FlightUsers.Where(x => x.payID == id);
            if (user == null)
            {
                return null;
            }
            return user;
        }

        // PUT: api/FlightUsers1/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutFlightUser(int id, FlightUser flightUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != flightUser.userID)
            {
                return BadRequest();
            }

            db.Entry(flightUser).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FlightUserExists(id))
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

        // POST: api/FlightUsers1
        [ResponseType(typeof(FlightUser))]
        public IHttpActionResult PostFlightUser(FlightUser flightUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.FlightUsers.Add(flightUser);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = flightUser.userID }, flightUser);
        }

        // DELETE: api/FlightUsers1/5
        [ResponseType(typeof(FlightUser))]
        public IHttpActionResult DeleteFlightUser(int id)
        {
            FlightUser flightUser = db.FlightUsers.Find(id);
            if (flightUser == null)
            {
                return NotFound();
            }

            db.FlightUsers.Remove(flightUser);
            db.SaveChanges();

            return Ok(flightUser);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FlightUserExists(int id)
        {
            return db.FlightUsers.Count(e => e.userID == id) > 0;
        }
    }
}