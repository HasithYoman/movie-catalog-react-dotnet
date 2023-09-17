import axios from "axios"
import { movieTheaterCreationDTO } from "./MovieTheater.model"
import MovieTheaterForm from "./MovieTheaterForm"
import { getUrlMovieTheaters } from "../endpoints";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import DisplayErrors from "../utils/DisplayErrors";

 
function CreateMovieTheaters(){

    const urlMovieTheaters=getUrlMovieTheaters();
    const history= useHistory();
    const [errors, setErrors] = useState<string[]>([]);
    async function create(movieTheater: movieTheaterCreationDTO){
        try{

            await axios.post(urlMovieTheaters,movieTheater);
            history.push("/movietheaters")
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    // Assuming error.response.data is an array of strings
                    setErrors(error.response.data);
                }
            }
        }
    }
    return(
        <>
            <h3>Create MovieTheaters</h3>
            <DisplayErrors errors={errors}/>
            <MovieTheaterForm
                model={{name:''}}
                onSubmit={async values=> await create(values)}
                />
            
        </>
    )
}

export default CreateMovieTheaters

function setErrors(data: any) {
    throw new Error("Function not implemented.");
}
