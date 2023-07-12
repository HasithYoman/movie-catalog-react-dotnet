using Microsoft.AspNetCore.Mvc;
using MoviesApi.Entities;
using MoviesApi.Services;

namespace MoviesApi.Controllers
{
    [Route("api/genres")]
    public class GenresController : ControllerBase
    {
        private readonly IRepository repository;

        public GenresController(IRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public List<Genre> Get()
        {
            return repository.GetAllGenres();
        }

        [HttpGet]
        public Genre Get(int id)
        {
            var genre= repository.GetGenreById(id);

            if(genre == null)
            {
               // return NotFound();
            }

            return genre;
        }

        [HttpPost]
        public void post()
        {

        }

        [HttpPut]
        public void put()
        {

        }
        [HttpDelete]
        public void delete()
        {

        }
    }

}
