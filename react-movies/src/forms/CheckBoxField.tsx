import { Field } from "formik"

function CheckBoxField(props: checkBoxFieldProps){
    return(
        <div className="mb-3 form-check">
            <Field className="form-check-input" id={props.field} name={props.displayName}
            type="checkbox"  />

            <label htmlFor={props.field}>{props.displayName}</label>
        </div>
        )
}

export default CheckBoxField

interface checkBoxFieldProps{
    displayName: string;
    field: string;
}