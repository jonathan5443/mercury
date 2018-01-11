import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";

class ImageCarousel extends Component {
  render() {
    return (
      <OwlCarousel className="owl-theme imageCarousel" loop dots={false} items={5} margin={10} nav>
        <div className="item">
          <img src="https://dummyimage.com/200x300/ffffff" />
        </div>
        <div className="item">
          <img src="https://dummyimage.com/200x300/ffffff" />
        </div>
        <div className="item">
          <img src="https://dummyimage.com/200x300/ffffff" />
        </div>
        <div className="item">
          <img src="https://dummyimage.com/200x300/ffffff" />
        </div>
        <div className="item">
          <img src="https://dummyimage.com/200x300/ffffff" />
        </div>
        <div className="item">
          <img src="https://dummyimage.com/200x300/ffffff" />
        </div>
        <div className="item">
          <img src="https://dummyimage.com/200x300/ffffff" />
        </div>
        <div className="item">
          <img src="https://dummyimage.com/200x300/ffffff" />
        </div>
      </OwlCarousel>
    );
  }
}

export default ImageCarousel;
