using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using MoviesApi.DTOs;
using MoviesApi.Entities;
using MoviesApi.Filters;
using MoviesApi.Helpers;

namespace MoviesApi.Controllers
{
    [Route("api/genres")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class GenresController : ControllerBase
    {
        private readonly ILogger<GenresController> logger;
        private readonly ApplicationDBContext context;
        private readonly IMapper mapper;

        public GenresController(ILogger<GenresController> logger, ApplicationDBContext context,
            IMapper mapper)
        {
            this.logger = logger;
            this.context=context;
            this.mapper= mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<GenreDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
        {
           // logger.LogInformation("Getting All genres");
            //context.Genres=i want to work with genres and ToListAsync meand that get records a list

            var queryable = context.Genres.AsQueryable();
            await HttpContext.InsertParameterPaginationHeader(queryable);
            var genres= await queryable.OrderBy(x => x.Name).Paginate(paginationDTO).ToListAsync();
            return mapper.Map<List<GenreDTO>>(genres);

            /*var genresDTOs = new List<GenreDTO>();
            foreach (var genre in genres) {
                genresDTOs.Add(new GenreDTO() { Id = genre.Id, Name = genre.Name });
            }

            return genresDTOs;*/
        }

        [HttpGet("{Id}", Name = "getGenre")]
        public ActionResult<Genre> Get(int Id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<ActionResult> post([FromBody] GenreCreationDTO genreCreationDTO)
        {
            var genre= mapper.Map<Genre>(genreCreationDTO);
            context.Genres.Add(genre);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut]
        public ActionResult put([FromBody] Genre genre)
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        public ActionResult delete([FromBody] Genre genre)
        {
            throw new NotImplementedException();
        }
    }
}
