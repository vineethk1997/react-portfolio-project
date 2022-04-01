import React,{useState} from 'react';
import "../ModuleCss/Style.css";
import { NavLink} from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";


export default function Navigation() {
  const[toggle, setToggle] = useState(false);
  return (
    <>
    <nav>
        <ul className='nav-links'>
          <div className='content_navbar'>
            <span className='text'style={{color:"black"}}>K Vineeth</span>
            <NavLink to='/home'  className="nav-link">Home</NavLink>
            <NavLink to='/projects' className="nav-link">Projects</NavLink>
            <NavLink to='/contact' className="nav-link">Contact</NavLink>
            </div>
            <div className='icon'>
            <span onClick={()=>setToggle(true)}><TiThMenu/></span>
            </div>

            
            
        </ul>

    </nav>
    </>
  )
}
