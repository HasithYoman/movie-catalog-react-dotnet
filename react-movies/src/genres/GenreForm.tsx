import { Link } from "react-router-dom"
import Button from "../Button";
import {  Form, Formik, FormikHelpers } from "formik";
import * as yup from 'yup'; 
import TextField from "../forms/TextField";
import { genreCreationDTO } from "./Genres.model";

function GenreForm(props: genreFormProps){
    return(
        <Formik initialValues={props.model}

        onSubmit={props.onSubmit}
        validationSchema={yup.object({
            name:yup.string().required('This field is required')
            .max(50,'Max length is 50 characters').firstLetterUppercase()
        })}
        >
            {(FormikProps)=>(
               <Form>
                <TextField field="name" displayName="Name"/>
                <Button disabled={FormikProps.isSubmitting} type='submit'>Save Changes</Button>
                <Link className='btn btn-secondary' to='/genres'> Cancle</Link>
            </Form> 
            )}
            

        </Formik>
    )
}

export default GenreForm

interface genreFormProps{
    model: genreCreationDTO;
    onSubmit(values: genreCreationDTO, action: FormikHelpers<genreCreationDTO>):void;
}