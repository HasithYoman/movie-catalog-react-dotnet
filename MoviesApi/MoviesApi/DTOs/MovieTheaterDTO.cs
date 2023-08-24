using System.ComponentModel.DataAnnotations;

namespace MoviesApi.DTOs
{
    public class MovieTheaterDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        // will not expose point location data type to the outside board.instead we add lat long
        public double Latitude { get; set; }
        public double Longitude { get; set; }

    }
}
