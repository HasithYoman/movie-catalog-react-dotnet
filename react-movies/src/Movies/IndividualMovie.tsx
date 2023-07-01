import movieDTO from "./movies.model"
import css from "./individualMovie.module.css"


function IndividualMovie(props: movieDTO){

    const buildLink =() => `/movie/${props.id}`
    return(
        <div className={css.div}>
            <a href={buildLink()}>
                <img alt="poster" src={props.poster}/>
            </a>
            <p>
                <a href={buildLink()}>{props.title}</a>
            </p>

        </div>
    )
}
export default IndividualMovie