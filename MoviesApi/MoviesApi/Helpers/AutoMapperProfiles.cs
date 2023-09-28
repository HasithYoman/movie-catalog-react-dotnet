using AutoMapper;
using MoviesApi.DTOs;
using MoviesApi.Entities;
using NetTopologySuite.Geometries;

namespace MoviesApi.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles(GeometryFactory geometryFactory) { 

            //mapping from GenreDTO to Genre and Genre to GenreDTO
            CreateMap<GenreDTO, Genre>().ReverseMap();
            CreateMap<GenreCreationDTO, Genre>();

            CreateMap<ActorDTO, Actor>().ReverseMap();
            CreateMap<ActorCreationDTO, Actor>()
                   .ForMember(x => x.Picture, options => options.Ignore());

            CreateMap<MovieTheater, MovieTheaterDTO>()
                .ForMember(x => x.Latitude, dto => dto.MapFrom(prop => prop.Location.Y))
                .ForMember(x => x.Longitude, dto => dto.MapFrom(prop => prop.Location.X));

            CreateMap<MovieTeaterCreationDTO, MovieTheater>()
                .ForMember(x => x.Location, x => x.MapFrom(dto =>
                geometryFactory.CreatePoint(new Coordinate(dto.Longitude, dto.Latitude))));

            CreateMap<MovieCreationDTO, movie>()
                .ForMember(x => x.Poster, options => options.Ignore())
                .ForMember(x => x.MoviesGenres, options => options.MapFrom(MapMoviesGenres))
                .ForMember(x=> x.MovieTheatersMovies, options=> options.MapFrom(MapMovieTheatersMovies))
                .ForMember(x=> x.MoviesActors, options => options.MapFrom(MapMoviesActors));
        }

        private List<MoviesGenres> MapMoviesGenres(MovieCreationDTO movieCreationDTO, movie movie)
        {
            var result= new List<MoviesGenres>();

            if (movieCreationDTO.GenresIds==null){ return result; }

            foreach(var id in movieCreationDTO.GenresIds)
            {
                result.Add(new MoviesGenres() { GenreId = id });
            }

            return result;
        }

        private List<MovieTheatersMovies> MapMovieTheatersMovies(MovieCreationDTO movieCreationDTO,
            movie movie)
        {
            var result= new List<MovieTheatersMovies>();

            if (movieCreationDTO.MovieTheatersIds == null) { return result; }

            foreach(var id in movieCreationDTO.MovieTheatersIds)
            {
                result.Add(new MovieTheatersMovies() { MovieTheaterId = id }); 
            }
            return result;
        }

        private List<MoviesActors> MapMoviesActors(MovieCreationDTO movieCreationDTO, movie movie)
        {
            var result= new List<MoviesActors>();

            if(movieCreationDTO.Actors == null) { return result; }

             foreach(var actor in movieCreationDTO.Actors)
            {
                result.Add(new MoviesActors() { ActorId= actor.Id, Character = actor.Character });
            }

             return result;
        }
    }
}
