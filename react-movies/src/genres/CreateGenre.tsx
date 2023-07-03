import { useHistory } from "react-router-dom"
import Button from "../Button";

 
function CreateGenre(){

    const history=useHistory();
    return(
        <>
            <h3>Create Genre</h3>
            <Button  onClick={()=>{
                 //...saving in the database
                 history.push('/genres')
            }}>Save Changes</Button>
            
        </>
    )
}

export default CreateGenre