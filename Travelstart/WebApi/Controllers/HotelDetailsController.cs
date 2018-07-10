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
    public class HotelDetailsController : ApiController
    {
        private HotelDetailsEntities db = new HotelDetailsEntities();

        // GET: api/HotelDetails
        public IQueryable<HotelDetail> GetHotelDetails()
        {
            return db.HotelDetails;
        }

        // GET: api/HotelDetails/5
        [ResponseType(typeof(HotelDetail))]

        public IQueryable<HotelDetail> GetHotelDetail(string des,string d1,string d2)
        {
            var search = db.HotelDetails.Where(x => x.Destination == des && x.InDate == d1 && x.OutDate == d2);
            if (search == null)
            {
                return null;
            }
            return search;
        }
        public IHttpActionResult GetHotelDetail(int id)
        {
            HotelDetail hotelDetail = db.HotelDetails.Find(id);
            if (hotelDetail == null)
            {
                return NotFound();
            }

            return Ok(hotelDetail);
        }

        // PUT: api/HotelDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutHotelDetail(int id, HotelDetail hotelDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != hotelDetail.HotelId)
            {
                return BadRequest();
            }

            db.Entry(hotelDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HotelDetailExists(id))
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

        // POST: api/HotelDetails
        [ResponseType(typeof(HotelDetail))]
        public IHttpActionResult PostHotelDetail(HotelDetail hotelDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.HotelDetails.Add(hotelDetail);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = hotelDetail.HotelId }, hotelDetail);
        }

        // DELETE: api/HotelDetails/5
        [ResponseType(typeof(HotelDetail))]
        public IHttpActionResult DeleteHotelDetail(int id)
        {
            HotelDetail hotelDetail = db.HotelDetails.Find(id);
            if (hotelDetail == null)
            {
                return NotFound();
            }

            db.HotelDetails.Remove(hotelDetail);
            db.SaveChanges();

            return Ok(hotelDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool HotelDetailExists(int id)
        {
            return db.HotelDetails.Count(e => e.HotelId == id) > 0;
        }
    }
}