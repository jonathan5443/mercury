import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

class Gallery extends Component {
  render() {
    const images = [
      {
        original: "https://dummyimage.com/1000X600/e6e6e6",
        thumbnail: "https://dummyimage.com/250x150/e6e6e6"
      },
      {
        original: "https://dummyimage.com/1000X600/e6e6e6",
        thumbnail: "https://dummyimage.com/250x150/e6e6e6"
      },
      {
        original: "https://dummyimage.com/1000X600/e6e6e6",
        thumbnail: "https://dummyimage.com/250x150/e6e6e6"
      }
    ];
    return <ImageGallery items={images} />;
  }
}

export default Gallery;
