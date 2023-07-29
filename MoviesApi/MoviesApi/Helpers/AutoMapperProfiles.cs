using AutoMapper;
using MoviesApi.DTOs;
using MoviesApi.Entities;

namespace MoviesApi.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles() { 

            //mapping from GenreDTO to Genre and Genre to GenreDTO
            CreateMap<GenreDTO, Genre>().ReverseMap();
            CreateMap<GenreCreationDTO, Genre>();

            CreateMap<ActorDTO, Actor>().ReverseMap();
            CreateMap<ActorCreationDTO, Actor>()
                   .ForMember(x => x.Picture, options => options.Ignore());
        }
    }
}
