import MovieTheaterForm from "./MovieTheaterForm"

function EditMovieTheaters(){
    return(
        <>
            <h3>Edit Movie Theaters</h3>
            <MovieTheaterForm
                model={{name:'sumbil'}}
                onSubmit={values=> console.log(values)}
                />
        </>

    )
}

export default EditMovieTheaters