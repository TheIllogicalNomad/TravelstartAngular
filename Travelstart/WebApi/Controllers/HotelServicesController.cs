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
    public class HotelServicesController : ApiController
    {
        private HotelServiceEntities db = new HotelServiceEntities();

        // GET: api/HotelServices
        public IQueryable<HotelService> GetHotelServices()
        {
            return db.HotelServices;
        }

        // GET: api/HotelServices/5
        [ResponseType(typeof(HotelService))]
        public IHttpActionResult GetHotelService(int id)
        {
            HotelService hotelService = db.HotelServices.Find(id);
            if (hotelService == null)
            {
                return NotFound();
            }

            return Ok(hotelService);
        }

        // PUT: api/HotelServices/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutHotelService(int id, HotelService hotelService)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != hotelService.ServiceHotelID)
            {
                return BadRequest();
            }

            db.Entry(hotelService).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HotelServiceExists(id))
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

        // POST: api/HotelServices
        [ResponseType(typeof(HotelService))]
        public IHttpActionResult PostHotelService(HotelService hotelService)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.HotelServices.Add(hotelService);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = hotelService.ServiceHotelID }, hotelService);
        }

        // DELETE: api/HotelServices/5
        [ResponseType(typeof(HotelService))]
        public IHttpActionResult DeleteHotelService(int id)
        {
            HotelService hotelService = db.HotelServices.Find(id);
            if (hotelService == null)
            {
                return NotFound();
            }

            db.HotelServices.Remove(hotelService);
            db.SaveChanges();

            return Ok(hotelService);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool HotelServiceExists(int id)
        {
            return db.HotelServices.Count(e => e.ServiceHotelID == id) > 0;
        }
    }
}