///type definition file exclusively exprting interfaces

import { actorMovieDTO } from "../actors/actors.model";
import { genreDTO } from "../genres/Genres.model";
import { movieTheaterDTO } from "../movieTheaters/MovieTheater.model";

export default interface movieDTO{
    id: number;
    title: string;
    poster: string;
}

export interface MovieCreationDTO{
    title:string;
    inTheater:boolean;
    trailer:string;
    releaseDate?: Date;
    poster?: File;
    posterURL?:string;
    genresIds?:number[];
    movieTheaterIds?:number[];
    actors?: actorMovieDTO[];

}

export default interface LandingPageDTO{
    
    inTheaters?: movieDTO[];
    upCommingReleases?: movieDTO[];
}

export interface moviesPostGetDTO{
    genres:genreDTO[];
    moviesTheaters: movieTheaterDTO[];
}