import { release } from "os"
import MovieForm from "./MovieForm"

function EditMovie(){
    return(
        <>
            <h3>Edit Movie</h3>
            <MovieForm model={{title:'Toy Story', inTheater: true, trailer:'url',
                releaseDate: new Date('2019-01-01T00:00:00')
            
            }}
                onSubmit={values=> console.log(values)}/>
        </>
    )
}
export default EditMovie