import { rejects } from "assert";
import { error } from "console";
import { useFormikContext } from "formik";
import { resolve } from "path";
import { ChangeEvent, useState } from "react";

function ImageField(props: imageFieldPrps){

    const[imageBase64,setImageBase64]=useState('');
    const [imageURL,setImageURL]= useState(props.imageURL);
    const{values}= useFormikContext<any>();

    const divStyle={marginTop: '10px'};
    const imgStyle={width: '450px'};

    const handleOnChange= (eventArgs : ChangeEvent<HTMLInputElement>)=>{
        if(eventArgs.currentTarget.files){
            const file= eventArgs.currentTarget.files[0];
            if(file){
                toBase64(file)
                    .then((base64Representation : string)=>setImageBase64(base64Representation))
                    .catch(error=> console.error(error));
                values[props.field]=file;
                setImageURL('')
            }else{
                  setImageBase64('');
            }
        }
    }
    const toBase64= (files: File) =>{
        return new Promise<string>((resolve, reject)=>{
            const reader= new FileReader();
            reader.readAsDataURL(files);
            reader.onload=() =>resolve(reader.result as string);
            reader.onerror=(error)=>reject(error);
        })
    }


    return(
        <div className="mb-3">
            <label>{props.displayName}</label>
            <div>
                <input type="file" accept=".jpeg, .jpg, .png" onChange={handleOnChange}/>
            </div>
            {imageBase64? 
                <div>
                    <div style={divStyle}>
                        <img style={imgStyle} src={imageBase64} alt="selected"/>
                    </div>
                </div>:null}
            {imageURL? 
                <div>
                    <div style={divStyle}>
                        <img style={imgStyle} src={imageURL} alt="selected"/>
                    </div>
                </div>:null}
        </div>
    )
}

export default ImageField

interface imageFieldPrps{
    displayName: string;
    imageURL:string;
    field: string;
}

ImageField.defaultProps={
    imageURL:'',
}