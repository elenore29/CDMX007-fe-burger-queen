import React from 'react'
import {Link} from 'react-router-dom'

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
    </ul>
  </nav>

export default ToolBar