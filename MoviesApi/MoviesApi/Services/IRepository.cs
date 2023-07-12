using MoviesApi.Entities;

namespace MoviesApi.Services
{
    public interface IRepository
    {
        List<Genre> GetAllGenres();
        Genre GetGenreById(int Id);
    }
}
