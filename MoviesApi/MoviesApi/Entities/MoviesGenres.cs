namespace MoviesApi.Entities
{
    public class MoviesGenres
    {
        public int GenreId {  get; set; }

        public int MovieId { get; set; }

        //MovieGenres to Genre
        public Genre Genre { get; set; }

        //MovieGenres to movie
        public movie movie { get; set; }
    }
}
