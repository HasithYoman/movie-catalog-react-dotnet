import { useHistory, useParams } from "react-router-dom"
import GenreForm from "./GenreForm";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { getUrlGenres } from "../endpoints";
import { genreCreationDTO, genreDTO } from "./Genres.model";
import Loading from "../utils/Loading";
import DisplayErrors from "../utils/DisplayErrors";
import EditEntity from "../utils/EditEntity";

 
function EditGenre(){
    const urlGenres= getUrlGenres();
   
    return(
        <>
           <EditEntity<genreCreationDTO,genreDTO>
                url={urlGenres} entityName="Genres"
                indexURL="/genres"
            >
                {(entity, edit)=>
                    <GenreForm model={entity}
                    onSubmit={async value=>{
                        await edit(value);
                    }}
                />
                }
           </EditEntity>
            
        </>
    )
}

export default EditGenre