﻿using System.ComponentModel.DataAnnotations;

namespace MoviesApi.Entities
{
    public class MoviesActors
    {
        public int ActorId {  get; set; }   

        public int MovieId { get; set; }

        [StringLength(maximumLength:75)]
        public string Character {  get; set; }

        public int Order { get; set; }

        public Actor Actor { get; set; }

        public movie Movie { get; set; }
    }
}
