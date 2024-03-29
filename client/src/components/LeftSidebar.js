import React from 'react'
import {NavLink} from 'react-router-dom'
import Globe from '../Assets/Globe.svg'
import './LeftSidebar.css'

export default function LeftSidebar() {
  return (
    <div className = "left-sidebar">
        <nav className = "side-nav">
            <NavLink to ="/" className = "side-nav-links" activeclassname ="active">
                <p>Home</p>
            </NavLink>
            <div className ="side-nav-div">
                <div><p>
                    PUBLIC</p></div>
                   <NavLink to = "/Questions"   className ="side-nav-links" activeclassname ="active" >{" "} <img src = {Globe} alt ="Globe"/>
                    <p style ={{paddingLeft : "10px"}}>Questions </p>
                    </NavLink>
                    <NavLink to = "/Tags" className ="side-nav-links" activeclassname ="active" style = {{paddinfLeft : "40px"}}>
                      <p>Tags</p>
                    </NavLink>
                    <NavLink to = "/Users" className ="side-nav-links" activeclassname ="active" style = {{paddinfLeft : "40px"}}>
                      <p>Users</p>
                    </NavLink>
            </div>
        </nav>
    </div>
  );
}