import { useEffect, useState } from "react"
import { genreDTO } from "../genres/Genres.model"
import { movieTheaterDTO } from "../movieTheaters/MovieTheater.model"
import MovieForm from "./MovieForm"
import { getMovies } from "../endpoints";
import axios, { AxiosResponse } from "axios";
import { moviesPostGetDTO } from "./movies.model";
import Loading from "../utils/Loading";

function CreateMovie(){


    const urlMovies= getMovies();
    const[nonSelectedGenres, setNonSelectedGenres]= useState<genreDTO[]>([]);
    const[nonSelectedMovieTheaters, setNonSelectedMovieTheaters]= useState<movieTheaterDTO[] >([]);
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
        axios.get(`${urlMovies}/postget`)
        .then((response:AxiosResponse<moviesPostGetDTO>)=>{
            setNonSelectedGenres(response.data.genres);
            setNonSelectedMovieTheaters(response.data.moviesTheaters);
            setLoading(false);
        })
    })

  
    return(
        <>
            <h3>Create Movie</h3>
            {loading? <Loading/>:
            <MovieForm model={{title:'', inTheater: false, trailer:''}}
                onSubmit={values=> console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={[]}
                 
                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedMovieTheaters={[]}
                selectedActors={[]}/>}
        </>
    )
}
export default CreateMovie
  // const nonSelectedGenres: genreDTO[]= [
    //                 {id:1, name:'comedy'},
    //                 {id:2, name:'Drama'}
    //             ]


    // const nonSelectedMovieTheaters: movieTheaterDTO[]= [
    //                 {id:1, name:'Sambil'},
    //                 {id:2, name:'Agora'}
    //             ]