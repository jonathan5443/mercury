import React, { Component } from "react";

class NewsList extends Component {
  render() {
    const news = [
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tag: "simulacro",
        image: "https://dummyimage.com/250x150/e6e6e6"
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tag: "simulacro",
        image: "https://dummyimage.com/250x150/e6e6e6"
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tag: "simulacro",
        image: "https://dummyimage.com/250x150/e6e6e6"
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tag: "simulacro",
        image: "https://dummyimage.com/250x150/e6e6e6"
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tag: "simulacro",
        image: "https://dummyimage.com/250x150/e6e6e6"
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tag: "simulacro",
        image: "https://dummyimage.com/250x150/e6e6e6"
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tag: "simulacro",
        image: "https://dummyimage.com/250x150/e6e6e6"
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tag: "simulacro",
        image: "https://dummyimage.com/250x150/e6e6e6"
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tag: "simulacro",
        image: "https://dummyimage.com/250x150/e6e6e6"
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tag: "simulacro",
        image: "https://dummyimage.com/250x150/e6e6e6"
      }
    ];

    return (
      <div className="news-list">
        {news.map(item => 
          <a href="#" className="col-3 news-item">
            <img src={item.image} />
            <p>{item.title}</p>
          </a>
        )}
      </div>
    );
  }
}

export default NewsList;
