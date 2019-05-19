import React from 'react'
import {Link} from 'react-router-dom'
import Logout from '../images/exit.png' 

const ToolBar = ()=>
  <nav className="nav-box">
    <ul>
      <li style={{ listStyleType: "none" }}>
        <Link to="/cliente/" className="menu-link">Cliente</Link>
      </li>
      <li style={{ listStyleType: "none" }}>
        <Link to="/desayuno/" className="menu-link">Desayuno</Link>
      </li>
      <li style={{ listStyleType: "none" }}>
        <Link to="/hamburguesas/" className="menu-link">Hamburguesas</Link>
      </li>
      <li style={{ listStyleType: "none" }}>
        <Link to="/especificaciones/" className="menu-link">Especificaciones</Link>
      </li>
      <li style={{ listStyleType: "none" }}>
        <Link to="/" className="menu-link"><img className="logout" src={Logout} alt="Cerrar Sesión"></img></Link>
      </li>
    </ul>
  </nav>

export default ToolBar