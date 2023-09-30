using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesApi.DTOs;
using MoviesApi.Entities;
using MoviesApi.Helpers;

namespace MoviesApi.Controllers
{
    [Route("api/movies")]
    [ApiController]
    public class MoviesController: ControllerBase
    {
        private readonly ApplicationDBContext context;
        private readonly IMapper mapper;
        private readonly IfileStorageService fileStorageService;
        private string container = "movies";

        public MoviesController(ApplicationDBContext context, IMapper mapper, 
            IfileStorageService fileStorageService)
        {
            this.context = context;
            this.mapper = mapper;
            this.fileStorageService = fileStorageService;
        }

        [HttpGet("PostGet")]
        public async Task<ActionResult<MoviePostGetDTO>> PostGet()
        {
            var movieTheaters = await context.MoviesTheaters.OrderBy(x=> x.Name).ToListAsync();
            var genres= await context.Genres.ToListAsync();

            var movieTheatersDTO= mapper.Map<List<MovieTheaterDTO>>(movieTheaters);
            var genresDTO = mapper.Map<List<GenreDTO>>(genres);

            return new MoviePostGetDTO() { Genres = genresDTO, MovieTheaters = movieTheatersDTO };
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromForm] MovieCreationDTO movieCreationDTO)
        {
            var movie=mapper.Map<movie> (movieCreationDTO);

            if(movieCreationDTO.Poster != null)
            {
                movie.Poster = await fileStorageService.SaveFile(container, movieCreationDTO.Poster);
            }

            AnnotateActorsOrder(movie);
            context.Add(movie);
            await context.SaveChangesAsync();
            return NoContent();
        }

        private void AnnotateActorsOrder(movie movie)
        {
            if(movie.MoviesActors != null)
            {
                for(int i=0; i<movie.MoviesActors.Count;i++)
                {
                    movie.MoviesActors[i].Order = i;
                }
            }
        }


    }
}
