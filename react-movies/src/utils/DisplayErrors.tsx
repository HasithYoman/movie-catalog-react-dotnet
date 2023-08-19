export default function DisplayErrors(props: DisplayErrorsProps) {
    const style = { color: 'red' };
    return (
        <>
            {props.errors ? (
                <ul style={style}>
                    {props.errors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            ) : null}
        </>
    );
}

interface DisplayErrorsProps {
    errors?: string[];
}

// import React from "react";

// interface DisplayErrorsProps {
//     errors?: string[];
// }

// function DisplayErrors(props: DisplayErrorsProps) {
//     const style = { color: 'red' };

//     if (!props.errors || !Array.isArray(props.errors)) {
//         return null; // Return early if errors are not present or not an array
//     }

//     return (
//         <ul style={style}>
//             {props.errors.map((error, index) => (
//                 <li key={index}>{error}</li>
//             ))}
//         </ul>
//     );
// }

// export default DisplayErrors;
