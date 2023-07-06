import ActorForm from "./ActorForm"

function CreateActors(){
    return(
        <>
            <h3>Create Actors</h3>
            <ActorForm model={{name:'', dateOfBirth:undefined}}
                onSubmit={values=> console.log(values)}/>
        </>

    )

}

export default CreateActors