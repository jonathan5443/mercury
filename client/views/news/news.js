import React, { Component } from 'react';
import NewsList from "../../components/news/news-list";

class News extends Component {
  render() {
    return (
      <div class="col-12 news">
        <h2>Noticias</h2>
        <NewsList />
      </div>
    );
  }
}

export default News;