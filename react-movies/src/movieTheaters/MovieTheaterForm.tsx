import { Form, Formik, FormikHelpers } from "formik"
import TextField from "../forms/TextField"
import Button from "../Button"
import { Link } from "react-router-dom"
import { movieTheaterCreationDTO } from "./MovieTheater.model"
import * as Yup from 'yup';
import Map from '../utils/Map'

function MovieTheaterForm(props: movieTheaterForm){
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
                        <Map/>
                    </div>
                    <Button disabled={formilProps.isSubmitting} type="submit">Save Changes</Button>
                    <Link className='btn btn-secndary' to="/movieTheaters"></Link>
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