import { Component } from "react";

class ImgComponent extends Component {
  render() {
    return (
      <img className="kitten" src={this.props.image} alt={this.props.alt}></img>
    );
  }
}

export default ImgComponent;
