import { Redirect } from "react-router-dom"

function ReDirectToLandingPage(){
    return<Redirect to={{pathname:'/'}}/>
}

export default ReDirectToLandingPage