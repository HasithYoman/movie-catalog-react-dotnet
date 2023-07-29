using Microsoft.EntityFrameworkCore;
using MoviesApi.Entities;
using System.Diagnostics.CodeAnalysis;

namespace MoviesApi
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext([NotNullAttribute]DbContextOptions options) : base(options)
        {
        }

        public DbSet<Genre> Genres { get; set; }
        public DbSet<Actor> Actors { get; set; }
    }
}
