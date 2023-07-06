import { Form, Formik, FormikHelpers } from "formik"
import TextField from "../forms/TextField";
import Button from "../Button";
import { Link } from "react-router-dom";
import { actorCreationDTO } from "./actors.model";
import * as Yup from "yup"
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";

function ActorForm(props: actoFormProps){
    return(
        <Formik 
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name:Yup.string().required('This field is required').firstLetterUppercase(),
                dateOfBirth: Yup.date().nullable().required('This field is required')
            })}>
                {(formikProps)=>(
                    <Form>
                        <TextField displayName="Name" field="name"/>
                        <DateField displayName="Date of Birth" field="dateOfBirth"/>
                        <ImageField displayName="picture" field="picture" imageURL={props.model.pictureURL}/>

                            <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>

                            <Link to="/actors" className="btn btn-secondary">Cancle</Link>
                    </Form>
                )}
            
        </Formik>
    )
}
export default ActorForm

interface actoFormProps{
    model:actorCreationDTO,
    onSubmit(values:actorCreationDTO,action: FormikHelpers<actorCreationDTO>):void;
}