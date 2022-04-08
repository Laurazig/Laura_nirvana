import React from "react";  
import { Link, useHistory } from "react-router-dom";

const NotFound = () =>{
    const history = useHistory()
    console.log("historyObjects",history )
    return (
        <div> 
            <h2>404 Error - Page Not Found</h2>
            {/* <Link to="/" >Go to Home page</Link> */}
            <button onClick={history.goBack}>Go back</button>
        </div>
    )
}
export default NotFound
