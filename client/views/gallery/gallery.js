import React, { Component } from 'react';
import GalleryComponent from "../../components/gallery/gallery";
import MoreGalleries from "../../components/gallery/more-galleries";
class Gallery extends Component {
  render() {
    return (
      <div className="col-12 gallery">
        <h2> Fuertes lluvias causan estragos en varios sectores de Tocaima </h2>
        <GalleryComponent />
        <h4>Otras galerias</h4>
        <MoreGalleries />
      </div>
    );
  }
}

export default Gallery;