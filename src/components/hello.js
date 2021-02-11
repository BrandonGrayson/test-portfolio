import React from "react";
import "../styles/hello.css"
import { Link } from "react-router-dom"

const styles = {
    hero: {
        background: "red",
        height: "100vh"
    },
    el: {
        marginTop: "30vh"
    },
    
}

const Hello = () => {
    return (
        <div className='container hero d-flex flex-row justify-content-center col-sm-12 col-md-12 col-lg-12 col-xl-12' style={styles.hero}>
            <div className='flex-column' style={styles.el}>
                
                <h1>Hello.</h1>
        < Link to='/about'><h1>I Am</h1></Link>  
             <Link to='/portfolio'><h1>Brandon</h1></Link>   
            </div>

            <img src="./img/Brandon_cropped.jpg" class="img-thumbnail" alt="..." style={{ 'maxWidth': '150px', 'maxHeight': '100px', 'marginTop': '30vh'}}  / >

        </div>
    )
    
}

export default Hello;