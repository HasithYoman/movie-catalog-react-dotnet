import MovieForm from "./MovieForm"

function CreateMovie(){
    return(
        <>
            <h3>Create Movie</h3>
            <MovieForm model={{title:'', inTheater: false, trailer:''}}
                onSubmit={values=> console.log(values)}/>
        </>
    )
}
export default CreateMovie