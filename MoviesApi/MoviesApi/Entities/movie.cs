using System.ComponentModel.DataAnnotations;

namespace MoviesApi.Entities
{
    public class movie
    {
        public int Id { get; set; }

        [StringLength(maximumLength: 75)]
        [Required]
        public string Title { get; set; }

        public string Summary { get; set; }

        public string Trailer { get; set; }

        public bool InTheater {  get; set; }

        public DateTime ReleaseDate { get; set; }

        public string Poster { get; set; }

        //M2M bitween movies entity and Genres entity
        public List<MoviesGenres> MoviesGenres { get; set; }

        public List<MovieTheatersMovies> MovieTheatersMovies { get; set; }

        public List<MoviesActors> MoviesActors { get; set; }
    }
}
