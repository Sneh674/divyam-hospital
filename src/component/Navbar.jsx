import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"

const Navbar = () => {
    return (
        <div>
            <nav style={{display:"flex"}}>
                <img className="logo" src="divyam_full_crop.png" alt="Divyam"/>
                <Link to="/" style={{textDecoration:"none", color:"rgb(90, 165, 208)"}}>Home</Link>
                <Link to="/about" style={{textDecoration:"none", color:"rgb(90, 165, 208)"}}>About</Link>
                <Link to="/gallery" style={{textDecoration:"none", color:"rgb(90, 165, 208)"}}>Gallery</Link>
                <Link to="/contact" style={{textDecoration:"none", color:"rgb(90, 165, 208)"}}>Contact</Link>
                {/* <a href="/"><li>Home</li></a>*/}
                {/* Link will be converted to anchor tag on run time */}
            </nav>
        </div>
    )
}

export default Navbar
