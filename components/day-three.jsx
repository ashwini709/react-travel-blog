import React from "react";
import ImageGallery from "./image-gallery.jsx";
import FullItinerary from "./itinerary-link.jsx";
import imageSet from "../data/image-set.js";
import text from "../data/text.js";

class DayThree extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
  }

  componentDidMount() {
    const height = window.innerHeight;
    this.setState({ height });
  }

  render() {
    const { height } = this.state;
    const style = { height };

    const images = imageSet['day3'];
    const title = text['day3']['title'];
    const description = text['day3']['description'];

    return (
      <div className="day-container" style={style}>
        <div className='day-background-container' />
        <div className='card-container'>
          <div className="photo-container">
            <ImageGallery items={images} index='3' />
          </div>
          <div className="text-container">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <FullItinerary />
          </div>
        </div>
      </div>
    );
  }
}

export default DayThree;
