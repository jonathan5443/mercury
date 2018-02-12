import React, { Component } from 'react';
import NewsList from "../../components/news/news-list";

class News extends Component {
  render() {
    return (
      <div class="col-12 news">
        <h1><img className="image_footer" src={require("../../images/linea.png")}/>Noticias</h1>
        <input type="text" className="search_text" placeholder="Encontrar" />
        <NewsList />
      </div>
    );
  }
}

export default News;