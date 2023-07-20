export default function DisplayErrors(props: displayErrorsPrps){

    const style={color : 'red'}
    return(
        <>
            {props.erros ? <ul style={style}> 
                    {props.erros.map((error, index)=> <li key={index}>{error}</li>)}
            </ul>:null}
        </>
    )
}

interface displayErrorsPrps{
    erros?: string[];
}