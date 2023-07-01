import GenericList from "../utils/GenericList";
import Loading from "../utils/Loading";
import IndividualMovie from "./IndividualMovie";
import movieDTO from "./movies.model"
import CSS from "./MoviesList.module.css"

export default function MoviesList(props: moviesListProps){

    return <GenericList 
    list={props.movies}>
        <div className={CSS.div}>
            {props.movies?.map(movie=>
                <IndividualMovie{... movie} key={movie.id}/>)}
        </div>
    </GenericList>
        

}



//interface fr which is going to be an array of movies
interface moviesListProps{

    movies?: movieDTO[];
}