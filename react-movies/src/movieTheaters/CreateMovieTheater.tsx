import MovieTheaterForm from "./MovieTheaterForm"

 
function CreateMovieTheaters(){
    return(
        <>
            <h3>Create MovieTheaters</h3>
            <MovieTheaterForm
                model={{name:''}}
                onSubmit={values=> console.log(values)}
                />
            
        </>
    )
}

export default CreateMovieTheaters