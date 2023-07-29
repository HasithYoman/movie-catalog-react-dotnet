import { useState } from "react";
import ActorForm from "./ActorForm"
import { actorCreationDTO } from "./actors.model"
import DisplayErrors from "../utils/DisplayErrors";
import { ConvertActionToFormData } from "../utils/FormDataUtils";
import axios from "axios";
import { getUrlActors } from "../endpoints";
import { useHistory } from "react-router-dom";

function CreateActors(){

    const[errors, setErrors]= useState<string[]>([]);
    const urlActors= getUrlActors();
    const history= useHistory();
    async function create(actor: actorCreationDTO){
        try{
            const formData= ConvertActionToFormData(actor);

            await axios({
                method:'post',
                url:urlActors,
                data: formData,
                headers:{'Content-Type':'multiple/form-data'}
            });
            history.push('/actors');
        }
        catch(error: any){
            if(error && error.response){
                setErrors(error.response.data);
            }
        }
    }
    return(
        <>
            <h3>Create Actors</h3>
            <DisplayErrors erros={errors}/>
            <ActorForm model={{name:'', dateOfBirth:undefined}}
                onSubmit={async values=> await create(values)}/>
        </>

    )

} 

export default CreateActors