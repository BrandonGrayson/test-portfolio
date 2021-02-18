import React from "react";
import { Link } from "react-router-dom"

const styles = {
    hero: {
        background: "black",
        height: "100vh"
    },
    el: {
        marginTop: "20vh"
    },
    font: {
        fontSize: "100px",
        color: "white"
    },
    link: {
        color: "red",
        fontSize: "100px",
        borderBottom: "none"
    },
    decorate: {
        textDecoration: "none"
    }

}

const Hello = () => {
    return (
        <div className='container hero d-flex flex-row justify-content-center col-sm-12 col-md-12 col-lg-12 col-xl-12' style={styles.hero}>

            <div className='flex-column' style={styles.el}>
              <Link style={styles.decorate}   to='/about' ><h1 style={styles.font}>Hello.</h1></Link>  
                < Link style={styles.decorate}   to='/portfolio' ><h1 className='mt-5' style={styles.link} >I Am</h1></Link>
                <Link style={styles.decorate} to='/contact' ><h1 className='mt-5' style={styles.link}>Brandon</h1></Link>
            </div>

            <img src="./img/Brandon_cropped.jpg" class="img-thumbnail ml-5" alt="P" style={{ 'maxWidth': '250px', 'maxHeight': '300px', 'marginTop': '30vh' }} />

        </div>
    )

}

export default Hello;