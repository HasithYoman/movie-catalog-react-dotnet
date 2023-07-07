import { Form, Formik, FormikHelpers } from "formik"
import { MovieCreationDTO } from "./movies.model";
import * as Yup from 'yup'
import Button from "../Button";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckBoxField from "../forms/CheckBoxField";

function MovieForm(props: movieFormProps){
    return(
        <Formik
             initialValues={props.model}
             onSubmit={props.onSubmit}
             validationSchema={Yup.object({
                title:Yup.string().required('This fiel is required').firstLetterUppercase()
             })}
            >
            {(formikProps)=>(
                <Form>
                    <TextField displayName="Title" field="title"/>
                    <CheckBoxField displayName="In Theaters" field="inTheaters"/>
                    <TextField displayName="Trailer" field="trailer"/>
                    <DateField displayName="Release Date" field="releaseDate"/>
                    <ImageField displayName="Poster" field="poster"
                        imageURL={props.model.posterURL}
                        />

                    <Button disabled={formikProps.isSubmitting} 
                    type='submit'>Save Changes</Button>
                    <Link className='btn btn-secondary' to='/genres'> Cancle</Link>
                </Form>
            )}
            
        </Formik>
    )
}

export default MovieForm

interface movieFormProps{
    model:MovieCreationDTO;
    onSubmit(values: MovieCreationDTO,action: FormikHelpers<MovieCreationDTO>):void;
}