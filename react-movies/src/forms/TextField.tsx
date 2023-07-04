import { ErrorMessage, Field } from "formik"

function TextField(props: TextFieldProps){
    return(
        <div className="mb-3">
                        <label htmlFor={props.field}>{props.displayName}</label>
                        <Field name={props.field} id={props.field} className="form-control"/>
                        <ErrorMessage name={props.field}>{msg=>
                        <div className="text-danger">{msg}</div>}</ErrorMessage>
        </div>
    )

}
export default TextField

interface TextFieldProps{
    field:string;
    displayName:string;
}