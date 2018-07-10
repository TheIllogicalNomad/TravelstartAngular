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
    public class HotelPicsController : ApiController
    {
        private HotelPicEntities db = new HotelPicEntities();

        // GET: api/HotelPics
        public IQueryable<HotelPic> GetHotelPics()
        {
            return db.HotelPics;
        }

        // GET: api/HotelPics/5
        [ResponseType(typeof(HotelPic))]

        public IQueryable<HotelPic> GetHotelPic(int id)
        {
            var picIDd = db.HotelPics.Where(x => x.hotelID == id);
            if(picIDd == null)
            {
                return null;
            }
            return picIDd;
        }
       

        // PUT: api/HotelPics/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutHotelPic(int id, HotelPic hotelPic)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != hotelPic.picID)
            {
                return BadRequest();
            }

            db.Entry(hotelPic).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HotelPicExists(id))
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

        // POST: api/HotelPics
        [ResponseType(typeof(HotelPic))]
        public IHttpActionResult PostHotelPic(HotelPic hotelPic)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.HotelPics.Add(hotelPic);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = hotelPic.picID }, hotelPic);
        }

        // DELETE: api/HotelPics/5
        [ResponseType(typeof(HotelPic))]
        public IHttpActionResult DeleteHotelPic(int id)
        {
            HotelPic hotelPic = db.HotelPics.Find(id);
            if (hotelPic == null)
            {
                return NotFound();
            }

            db.HotelPics.Remove(hotelPic);
            db.SaveChanges();

            return Ok(hotelPic);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool HotelPicExists(int id)
        {
            return db.HotelPics.Count(e => e.picID == id) > 0;
        }
    }
}