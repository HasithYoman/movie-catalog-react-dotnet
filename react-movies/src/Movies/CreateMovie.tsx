import { genreDTO } from "../genres/Genres.model"
import { movieTheaterDTO } from "../movieTheaters/MovieTheater.model"
import MovieForm from "./MovieForm"

function CreateMovie(){

    const nonSelectedGenres: genreDTO[]= [
                    {id:1, name:'comedy'},
                    {id:2, name:'Drama'}
                ]


    const nonSelectedMovieTheaters: movieTheaterDTO[]= [
                    {id:1, name:'Sambil'},
                    {id:2, name:'Agora'}
                ]
    return(
        <>
            <h3>Create Movie</h3>
            <MovieForm model={{title:'', inTheater: false, trailer:''}}
                onSubmit={values=> console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={[]}
                 
                nonSelectedMovieTheatres={nonSelectedMovieTheaters}
                selectedMovieTheatres={[]}
                selectedActors={[]}/>
        </>
    )
}
export default CreateMovie