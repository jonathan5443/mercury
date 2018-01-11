import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";

class Slider extends Component {
  render() {
    return (
      <OwlCarousel
        className="owl-theme slider"
        loop
        dots={false}
        items={1}
        autoplay={true}
        autoplayTimeout={4000}
        margin={10}
        nav
      >
        <div className="item">
          <div className="row">
            <div className="col-9">
              <img src="https://dummyimage.com/800x500/e6e6e6" />
            </div>
            <div className="col-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. . 
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row">
            <div className="col-9">
              <img src="https://dummyimage.com/800x500/e6e6e6" />
            </div>
            <div className="col-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. . 
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row">
            <div className="col-9">
              <img src="https://dummyimage.com/800x500/e6e6e6" />
            </div>
            <div className="col-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. . 
              </p>
            </div>
          </div>
        </div>
      </OwlCarousel>
    );
  }
}

export default Slider;
