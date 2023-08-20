using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesApi.DTOs;
using MoviesApi.Entities;
using MoviesApi.Helpers;

namespace MoviesApi.Controllers
{
    [Route("api/actors")]
    [ApiController]
    public class ActorsController : ControllerBase
    {
        private readonly ApplicationDBContext context;
        private readonly IMapper mapper;
        private readonly IfileStorageService fileStorageService;
        private readonly string containerName = "actors";


        public ActorsController(ApplicationDBContext context, IMapper mapper, IfileStorageService fileStorageService)
        {
            this.context = context;
            this.mapper = mapper;
            this.fileStorageService = fileStorageService;
        }

        [HttpGet]

        public async Task<ActionResult<List<ActorDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
        {
            var queryable= context.Actors.AsQueryable();
            await HttpContext.InsertParameterPaginationHeader(queryable);
            var actors = await queryable.OrderBy(x => x.Name).Paginate(paginationDTO).ToListAsync();
            return mapper.Map<List<ActorDTO>>(actors);
        }

        [HttpGet("{id:int}")]

        public async Task<ActionResult<ActorDTO>> Get(int id)
        {
            var actor= await context.Actors.FirstOrDefaultAsync(x => x.Id == id);               
            
            if(actor == null)
            {
                return NotFound();
            }
            return mapper.Map<ActorDTO>(actor);
        }

        [HttpPost]

        public async Task<ActionResult> post([FromForm] ActorCreationDTO actorCreationDTO)
        {
            var actor = mapper.Map<Actor>(actorCreationDTO);

            if (actorCreationDTO.Picture != null)
            {

                actor.Picture = await fileStorageService.SaveFile(containerName, actorCreationDTO.Picture);
                
            }
            context.Add(actor);
            await context.SaveChangesAsync(); 
            return NoContent();
        }
        [HttpPut]

        public async Task<ActionResult> put([FromForm] ActorCreationDTO actorCreationDTO)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var actor = await context.Actors.FirstOrDefaultAsync(x => x.Id == id);

            if (actor == null)
            {
                return NotFound(); 
            }
            context.Remove(actor);
            await context.SaveChangesAsync();
            return NoContent();
        }
    }

}
