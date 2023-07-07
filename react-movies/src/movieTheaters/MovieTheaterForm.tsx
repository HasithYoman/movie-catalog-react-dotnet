import { Form, Formik, FormikHelpers } from "formik"
import TextField from "../forms/TextField"
import Button from "../Button"
import { Link } from "react-router-dom"
import { movieTheaterCreationDTO } from "./MovieTheater.model"
import * as Yup from 'yup';
import Map from '../utils/Map'
import MapField from "../forms/MapField"
import { coordinateDTO } from "../utils/coordinates.model"

function MovieTheaterForm(props: movieTheaterForm){
    function transformCoordinates(): coordinateDTO[] | undefined{
        if(props.model.latitude && props.model.longitude){
            const response: coordinateDTO={
                lat: props.model.longitude,
                lng: props.model.longitude
            }
            return[response];
        }
        return undefined; 
    }

    return(
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstLetterUppercase() 
            })}
            >
            {(formilProps)=>(
                <Form>
                    <TextField displayName="Name" field="name"/>
                    <div style={{marginBottom:'1rem'}}>
                    <MapField latField="latitude" lngField="longitude" coordinates={transformCoordinates()}/>
                    </div>
                    <Button disabled={formilProps.isSubmitting} type="submit">Save Changes</Button>
                    <Link className='btn btn-secondary' to="/movieTheaters">Cancle</Link>
                </Form>
            )}
        </Formik>
    )
}

export default MovieTheaterForm

interface movieTheaterForm{
    model:movieTheaterCreationDTO;
    onSubmit(values: movieTheaterCreationDTO, action: FormikHelpers<movieTheaterCreationDTO>):void;

}