import React from "react";
import PageTitle from "../templates/PageTitle";
import AllProducts from './AllProducts'

const Home =()=>{
    return(
        <div id='home'>
            <PageTitle icon='fa fa-home' main='Pagina Inicial' />
            <br/>
            <AllProducts/>
        </div>
    );
}

export default Home;