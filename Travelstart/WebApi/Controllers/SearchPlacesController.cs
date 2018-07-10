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
    public class SearchPlacesController : ApiController
    {
        private PlaceSearchEntities10 db = new PlaceSearchEntities10();

        // GET: api/SearchPlaces
        public IQueryable<SearchPlace> GetSearchPlaces()
        {
            return db.SearchPlaces;
        }

        // GET: api/SearchPlaces/5
        [ResponseType(typeof(SearchPlace))]
        public IHttpActionResult GetSearchPlace(int id)
        {
            SearchPlace searchPlace = db.SearchPlaces.Find(id);
            if (searchPlace == null)
            {
                return NotFound();
            }

            return Ok(searchPlace);
        }

        // PUT: api/SearchPlaces/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSearchPlace(int id, SearchPlace searchPlace)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != searchPlace.id)
            {
                return BadRequest();
            }

            db.Entry(searchPlace).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SearchPlaceExists(id))
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

        // POST: api/SearchPlaces
        [ResponseType(typeof(SearchPlace))]
        public IHttpActionResult PostSearchPlace(SearchPlace searchPlace)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SearchPlaces.Add(searchPlace);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = searchPlace.id }, searchPlace);
        }

        // DELETE: api/SearchPlaces/5
        [ResponseType(typeof(SearchPlace))]
        public IHttpActionResult DeleteSearchPlace(int id)
        {
            SearchPlace searchPlace = db.SearchPlaces.Find(id);
            if (searchPlace == null)
            {
                return NotFound();
            }

            db.SearchPlaces.Remove(searchPlace);
            db.SaveChanges();

            return Ok(searchPlace);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SearchPlaceExists(int id)
        {
            return db.SearchPlaces.Count(e => e.id == id) > 0;
        }
    }
}