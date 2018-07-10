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
    public class UserInfoController : ApiController
    {
        private UserEntities db = new UserEntities();

        // GET: api/UserInfo
        public IQueryable<UserInfo> GetUserInfoes()
        {
            return db.UserInfoes;
        }

        // GET: api/UserInfo/5
        [ResponseType(typeof(UserInfo))]
        public IQueryable<UserInfo> GetFlightUsers(string name, string sname)
        {
            var names = db.UserInfoes.Where(x => x.FirstName == name & x.Surname == sname);
            if (names == null)
            {
                return null;
            }
            return names;
        }

        // PUT: api/UserInfo/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUserInfo(int id, UserInfo userInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userInfo.UserID)
            {
                return BadRequest();
            }

            db.Entry(userInfo).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserInfoExists(id))
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

        // POST: api/UserInfo
        [ResponseType(typeof(UserInfo))]
        public IHttpActionResult PostUserInfo(UserInfo userInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserInfoes.Add(userInfo);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = userInfo.UserID }, userInfo);
        }

        // DELETE: api/UserInfo/5
        [ResponseType(typeof(UserInfo))]
        public IHttpActionResult DeleteUserInfo(int id)
        {
            UserInfo userInfo = db.UserInfoes.Find(id);
            if (userInfo == null)
            {
                return NotFound();
            }

            db.UserInfoes.Remove(userInfo);
            db.SaveChanges();

            return Ok(userInfo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserInfoExists(int id)
        {
            return db.UserInfoes.Count(e => e.UserID == id) > 0;
        }
    }
}