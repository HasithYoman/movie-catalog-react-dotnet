using AutoMapper;
using Microsoft.AspNetCore.Mvc;
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
        [HttpPost]
        public async Task<ActionResult> Post([FromForm] MovieCreationDTO movieCreationDTO)
        {
            var movie=mapper.Map<movie> (movieCreationDTO);

            if(movie.Poster != null)
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
