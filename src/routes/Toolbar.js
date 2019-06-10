import React from 'react'
import {Link} from 'react-router-dom'

const ToolBar = ()=>
  <nav className="nav-box">
    <ul>
      <li className="route-link" style={{ listStyleType: "none" }}>
        <Link to="/" className="menu-link">Cliente</Link>
      </li>
      <li className="route-link" style={{ listStyleType: "none" }}>
        <Link to="/desayuno/" className="menu-link">Desayuno</Link>
      </li>
      <li className="route-link" style={{ listStyleType: "none" }}>
        <Link to="/hamburguesas/" className="menu-link">Hamburguesas</Link>
      </li>
    {/*   <li className="route-link" style={{ listStyleType: "none" }}>
        <Link to="/especificaciones/" className="menu-link">Especificaciones</Link>
      </li> */}
    </ul>
  </nav>

export default ToolBar