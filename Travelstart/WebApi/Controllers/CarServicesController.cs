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
    public class CarServicesController : ApiController
    {
        private CarServiceEntities db = new CarServiceEntities();

        // GET: api/CarServices
        public IQueryable<CarService> GetCarServices()
        {
            return db.CarServices;
        }

        // GET: api/CarServices/5
        [ResponseType(typeof(CarService))]
        public IHttpActionResult GetCarService(int id)
        {
            CarService carService = db.CarServices.Find(id);
            if (carService == null)
            {
                return NotFound();
            }

            return Ok(carService);
        }

        // PUT: api/CarServices/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCarService(int id, CarService carService)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != carService.CserviceID)
            {
                return BadRequest();
            }

            db.Entry(carService).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarServiceExists(id))
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

        // POST: api/CarServices
        [ResponseType(typeof(CarService))]
        public IHttpActionResult PostCarService(CarService carService)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CarServices.Add(carService);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = carService.CserviceID }, carService);
        }

        // DELETE: api/CarServices/5
        [ResponseType(typeof(CarService))]
        public IHttpActionResult DeleteCarService(int id)
        {
            CarService carService = db.CarServices.Find(id);
            if (carService == null)
            {
                return NotFound();
            }

            db.CarServices.Remove(carService);
            db.SaveChanges();

            return Ok(carService);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CarServiceExists(int id)
        {
            return db.CarServices.Count(e => e.CserviceID == id) > 0;
        }
    }
}