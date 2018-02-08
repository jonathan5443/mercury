import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">

          <div className="col-3">
            <h3>ATENCIÓN AL USUARIO</h3>
            <div className = "phone">
              <div className="col-2">
                <img className="image_footer" src={require("../../images/phone.png")}/>
              </div>
              <div className="col-10">
                <p>01800050004</p>
                <span>DIRECTORIO DE CONTACTOS ></span>
              </div>
            </div>

            <div className= "second_row">
              <div className="col-2">
                <img className="image_footer" src={require("../../images/mail.png")}/>
              </div>
              <div className="col-10">
                <span> </span>
                <p>info@alcaldia.com</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <h3>HORARIO DE ATENCIÓN</h3>
            <div className="Clock">
              <div className="col-2">
                <img className="image_footer" src={require("../../images/clock.png")}/>
              </div>
              <div className="col-10">
                <p>LUNES A VIERNES</p>
                <p>07:00 - 16:00</p>
              </div>
            </div>

            <div className="second_row">
              <div className="col-2">
                 <img className="image_footer" src={require("../../images/calendar.png")}/>
              </div>
              <div className="col-10">
                <span>ÚLTIMA ACTUALIZACIÓN</span>
                <p>NOVIEMBRE 1 de 2017</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <h3>DIRECCIÓN</h3>
            <div className="location">
              <div className="col-2">
                <img className="image_footer" src={require("../../images/location_icon.png")}/>
              </div>
              <div className="col-10">
                <p>CALLE 10 N0. 38-00</p>
                <p>PBX: 377 0850</p>
              </div>
            </div> 
            <div className ="second_row">
              <div className="col-2">
                <img className="image_footer" src={require("../../images/person.png")}/>
              </div>
              <div className="col-10">
                <span>NO. DE VISITAS</span>
                <p>11.793.892</p>
              </div>
            </div>  
          </div>

          <div className="col-3">
            <img className="map" src={require("../../images/mapa.png")}/>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
