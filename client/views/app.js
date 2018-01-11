import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";

export default class App extends React.Component {
  render() {
    return (
      <div className="mainWrapper">
        <Header />
        <NavBar />
        <div className="container contentWrapper">
          <div className="row">{this.props.children}</div>
        </div>
        <Footer />
      </div>
    );
  }
}
