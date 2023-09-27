using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesApi.DTOs;
using MoviesApi.Entities;
using MoviesApi.Helpers;
using System.ComponentModel.DataAnnotations;

namespace MoviesApi.Controllers
{
    [ApiController]
    [Route("api/movietheaters")]
    public class MovieTheatersController : ControllerBase
    {
        private readonly ApplicationDBContext context;
        private readonly IMapper mapper;

        public MovieTheatersController(ApplicationDBContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<MovieTheaterDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
        {
            var queryable= context.MoviesTheaters.AsQueryable();
            await HttpContext.InsertParameterPaginationHeader(queryable); 
            var entities= await queryable.OrderBy(x=> x.Name).Paginate(paginationDTO).ToListAsync();
            return mapper.Map<List<MovieTheaterDTO>>(entities);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<MovieTheaterDTO>> Get(int id)
        {
            var movieTheater= await context.MoviesTheaters.FirstOrDefaultAsync(x=> x.Id == id);

            if(movieTheater==null)
            {
                return NotFound();
            } 
            return mapper.Map<MovieTheaterDTO>(movieTheater); 
        }

        [HttpPost]

        public async Task<ActionResult> Post(MovieTeaterCreationDTO movieCreationDTO)
        {
            var movieTheater = mapper.Map<MovieTheater>(movieCreationDTO);
            context.Add(movieTheater);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")]
         
        public async Task<ActionResult> Put(int id, MovieTeaterCreationDTO movieCreationDTO)
        {
            var movieTheater = await context.MoviesTheaters.FirstOrDefaultAsync(x => x.Id == id);

            if (movieTheater == null)
            {
                return NotFound();
            }
            movieTheater = mapper.Map(movieCreationDTO, movieTheater);
            await context.SaveChangesAsync();
            return NoContent(); 
        }

        [HttpDelete("{id:int}")] 

        public async Task<ActionResult> Delete(int id)
        {
            var movieTheater = await context.MoviesTheaters.FirstOrDefaultAsync(x => x.Id == id);
            if (movieTheater == null)
            {
                return NotFound();
            }

            context.Remove(movieTheater);
            await context.SaveChangesAsync();
            return NoContent();
        }

    }
}
