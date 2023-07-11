import { release } from "os"
import MovieForm from "./MovieForm"
import { genreDTO } from "../genres/Genres.model"
import { movieTheaterDTO } from "../movieTheaters/MovieTheater.model"
import { actorMovieDTO } from "../actors/actors.model"

function EditMovie(){
    const nonSelectedGenres: genreDTO[]= [{id:2, name:'Drama'}]
    const selectedGenres: genreDTO[]= [{id:1, name:'comedy'}]


    const selectedMovieTheaters: movieTheaterDTO[]= [
        {id:2, name:'Agora'}]

    const nonSelectedMovieTheaters: movieTheaterDTO[]= [
        {id:1, name:'Sambil'}]


    const selectedActors: actorMovieDTO[]=[{
        id:1, name: "Felipe", character: 'Geralt', picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/220px-Tom_Holland_by_Gage_Skidmore.jpg'
    }]
    return(
        <>
            <h3>Edit Movie</h3>
            <MovieForm model={{title:'Toy Story', inTheater: true, trailer:'url',
                releaseDate: new Date('2019-01-01T00:00:00')
            
            }}
                onSubmit={values=> console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={selectedGenres}
                
                nonSelectedMovieTheatres={nonSelectedMovieTheaters}
                selectedMovieTheatres={selectedMovieTheaters}
                selectedActors={selectedActors}/>
        </>
    )
}
export default EditMovie