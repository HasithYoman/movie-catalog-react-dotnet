import MovieTheaterForm from "./MovieTheaterForm"

function EditMovieTheaters(){
    return(
        <>
            <h3>Edit Movie Theaters</h3>
            <MovieTheaterForm
                model={{name:'sumbil',latitude:  6.903301306347226, longitude: 79.85700130462648
                }}
                onSubmit={values=> console.log(values)}
                />
        </>

    )
}

export default EditMovieTheaters