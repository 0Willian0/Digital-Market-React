import React from "react";
import '../../styles/PageTitle.css'

const PageTitle = ({icon, main})=>{
    return(
        <div className="page-title">
            <h1>{icon && <i className={`${icon}`}></i>} {main}</h1>
        </div>
    );
}

export default PageTitle;