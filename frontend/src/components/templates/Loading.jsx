import React from "react";
import LoadingGif from '../../assets/loading.gif'
import '../../styles/Loading.css'

const Loading = ()=>{
    return(
        <div className="loading">
            <img src={LoadingGif} alt="Loading"/>
        </div>
        
    );
}

export default Loading 

