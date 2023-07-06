import ActorForm from "./ActorForm"

function EditActors(){
    return(
        <>
            <h3>Edit Actors</h3>
            <ActorForm model={{name:'Tom Holland', dateOfBirth:new Date('1996-06-01T00:00:00',),
            pictureURL:"https://upload.wikimedia.org/wikipedia/commons/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg"}}
                onSubmit={values=> console.log(values)}/>
        </>

    )
}

export default EditActors