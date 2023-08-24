import { format } from "path";
import { actorCreationDTO } from "../actors/actors.model";

export function ConvertActionToFormData(actor: actorCreationDTO):FormData{
    //convert Actor to form Data
    const formData= new FormData();

    formData.append('name', actor.name);

    if(actor.biograpy){
        formData.append('biography', actor.biograpy);
    }

    if(actor.dateOfBirth){
        formData.append('dateOfBitrth', formatDate(actor.dateOfBirth))
    }

    if(actor.picture){
        formData.append('picture',actor.picture);
    }

    return formData;
}

function formatDate(date:Date){
    date= new Date(date);
    const format= new Intl. DateTimeFormat("en",{
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
 
    const[
        {value: month},,
        {value: day},,
        {value: year}

    ]=format.formatToParts(date);

    return `${year}-${month}-${day}`;
}