import axios, { AxiosError } from "axios";
import GenreForm from "./GenreForm"
import { genreCreationDTO } from "./Genres.model";
import { getUrlGenres } from "../endpoints";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import DisplayErrors from "../utils/DisplayErrors";
import { error } from "console";

 
function CreateGenre(){

    const history=useHistory();
    const urlGenres = getUrlGenres();
    const[errors, setErros]= useState<string[]>([]);
    async function create(genre: genreCreationDTO){
        try{
            await axios.post(urlGenres, genre);
            history.push("/genres");
        }
        catch(error){
            if (axios.isAxiosError(error)) { // Check if it's an AxiosError
                if (error.response) {
                  setErros(error.response.data);
                }
              }
            // if(error && error.response){
            //     setErros(error.response.data);
            // }
        }
    }
    return(
        <>
            <h3>Create Genre</h3>
            <DisplayErrors erros={errors}/>
            <GenreForm model={{name:''}}
                onSubmit={async value=>{
                    await create(value);
                }}
            />

        </>
    )
}

export default CreateGenre