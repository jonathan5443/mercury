import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="col-3">
            <h3>Atencion al usuario</h3>
            <p>01800050004</p>
            <p><span>Directorio de contactos</span></p>
            <p>info@alcaldia.com</p>
          </div>
          <div className="col-3">
            <h3>Horario de atencion</h3>
            <p>Lunes a viernes</p>
            <p>07:00 - 16:00</p>
            <p><span>Ultima actualizacion</span></p>
            <p>Diciembre 1 de 2017</p>
          </div>
          <div className="col-3">
            <h3>Direccion</h3>
            <p>Calle 10 NO 38-00</p>
            <p>PBX: 377 0850</p>
            <p><span>NO. de visitas</span></p>
            <p>11.793.882</p>
          </div>
          <div className="col-3">
            <img src="https://dummyimage.com/250x200/e6e6e6" alt="map" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
