import { Link } from "react-router-dom"
import Button from "../Button";
import {  Form, Formik } from "formik";
import * as yup from 'yup'; 
import TextField from "../forms/TextField";

 
function CreateGenre(){

    // const history=useHistory();
    return(
        <>
            <h3>Create Genre</h3>

            <Formik initialValues={{
                name:''
            }}

            onSubmit={value=>{
                console.log(value);
            }}
            validationSchema={yup.object({
                name:yup.string().required('This field is required')
            })}
            >
                <Form>
                    <TextField field="name" displayName="Name"/>
                    <Button type='submit'>Save Changes</Button>
                    <Link className='btn btn-secondary' to='/genres'> Cancle</Link>
                </Form>

            </Formik>
        </>
    )
}

export default CreateGenre