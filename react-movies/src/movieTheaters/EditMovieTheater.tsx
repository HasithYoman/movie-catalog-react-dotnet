import { getUrlMovieTheaters } from "../endpoints";
import EditEntity from "../utils/EditEntity"
import { movieTheaterCreationDTO, movieTheaterDTO } from "./MovieTheater.model"
import MovieTheaterForm from "./MovieTheaterForm"

function EditMovieTheaters(){
    const urlMovieTheaters=getUrlMovieTheaters();
    return(
        <EditEntity<movieTheaterCreationDTO, movieTheaterDTO>
            url={urlMovieTheaters} indexURL="/movietheater" entityName="Movie Theater">
                {(entity, edit )=>
                    <MovieTheaterForm model={entity} 
                    onSubmit={async values => await edit(values)}/>
                }
                
        </EditEntity>

    )
}

export default EditMovieTheaters