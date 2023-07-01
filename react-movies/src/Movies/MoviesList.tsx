import IndividualMovie from "./IndividualMovie";
import movieDTO from "./movies.model"
import CSS from "./MoviesList.module.css"

export default function MoviesList(props: moviesListProps){


    if(!props.movies){
        return<>Loading... </>
    }else if(props.movies.length===0)
    {
        return<>There are no movies to display</>
    }
    return(
        <div className={CSS.div}>
            {props.movies.map(movie=>
                <IndividualMovie{... movie} key={movie.id}/>)}
        </div>
    )
}



//interface fr which is going to be an array of movies
interface moviesListProps{

    movies?: movieDTO[];
}