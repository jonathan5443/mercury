import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="container">
        <div className="row">
          <div className="top-bar col-12">
            <ul>
              <li>
                <a href="">Transparencia</a>
              </li>
              <li>
                <a href="">Nuestro alcalde</a>
              </li>
              <li>
                <a href="">Registrate</a>
              </li>
              <li>
                <a href="">Idioma</a>
              </li>
              <li>
                <a href="">Inicia sesion</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <NavLink exact to="/" className="logo col-7">
            <div className="row">
              <div className="col-3">
               <img src="https://dummyimage.com/100/e6e6e6" alt="map" />
              </div>
              <div className="col-9">
                <h1>
                  Alcaldia municipal
                  <span> Tocaima</span>
                </h1>
              </div>
            </div>
          </NavLink>
          <div className="social col-5">
            <div className="row networks">
              <div className="col-6">
                <img src="https://dummyimage.com/50/e6e6e6" alt="map" />
              </div>
              <div className="col-6">
                <img src="https://dummyimage.com/50/e6e6e6" alt="map" />
              </div>
              <div className="col-6">
                <img src="https://dummyimage.com/50/e6e6e6" alt="map" />
              </div>
              <div className="col-6">
                <img src="https://dummyimage.com/50/e6e6e6" alt="map" />
              </div>
            </div>
            <img src="https://dummyimage.com/260X145/e6e6e6" className="city-photo" alt="map" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
