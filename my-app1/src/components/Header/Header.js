import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            {/* <h1>sport</h1> */}
            <nav>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/section1">Section1</Link>
                <Link className="nav-link" to="/section2">Section2</Link>
            </nav>
        </div>
    )
}
export default Header