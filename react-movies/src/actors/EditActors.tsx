import { getUrlActors } from "../endpoints"
import EditEntity from "../utils/EditEntity"
import { ConvertActionToFormData } from "../utils/FormDataUtils";
import ActorForm from "./ActorForm"
import { actorCreationDTO, actorDTO } from "./actors.model"

function EditActors(){

    const urlActors=getUrlActors();

    function transform(actor: actorDTO): actorCreationDTO{
        return{
            name: actor.name,
            pictureURL: actor.picture,
            biograpy: actor.biography,
            dateOfBirth: new Date(actor.dateOfBirth)

        }
    }
    console.log();
    return(
        <EditEntity<actorCreationDTO, actorDTO>
            url={urlActors} indexURL="/actors" entityName="Actor" 
            transformFormData={ConvertActionToFormData}
            transform={transform}>
                {(entity, edit)=>
                    <ActorForm
                        model={entity}
                        onSubmit={async values => await edit(values)}/>
                }

            </EditEntity>

    )
}

export default EditActors