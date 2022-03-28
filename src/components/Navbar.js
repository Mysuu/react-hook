import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className="topnav" >
            <NavLink activeclassname="active" to="/">Home</NavLink>
            <NavLink to="/todo">Todo</NavLink>
            <NavLink to="/countdown">Countdown</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/ytb">Youtube</NavLink>
        </div >
    )
}

export default Navbar