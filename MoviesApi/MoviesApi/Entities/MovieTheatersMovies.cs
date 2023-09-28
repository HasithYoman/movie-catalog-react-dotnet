namespace MoviesApi.Entities
{
    public class MovieTheatersMovies
    {
        public int MovieTheaterId { get; set; }

        public int MovieId { get; set; }

        public MovieTheater MovieTheater { get; set; }

        public movie Movie {  get; set; }
    }
}
