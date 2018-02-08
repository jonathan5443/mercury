
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="container">
        <div className="row">
          <div className="TabBar col-12">
            <ul>
              <li><NavLink  exact activeClassName="active" to="/">Nuestra alcaldia</NavLink></li>
              <li><NavLink activeClassName="active" to="/gallery">Tramites y servicios</NavLink></li>
              <li><NavLink activeClassName="active" to="/news">Planeación</NavLink></li>
              <li><NavLink activeClassName="active" to="#">Presupuesto y finanzas</NavLink></li>
              <li><NavLink activeClassName="active" to="#">Participación</NavLink></li>
              <li><NavLink activeClassName="active" to="#">Atencion a la ciudadania</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;