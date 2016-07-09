import React from "react";
import ImageGallery from "./image-gallery.jsx";

class DaySeven extends React.Component {

  constructor(props) {
    super(props);

    this.state = { height: 0 };
  }

  componentDidMount() {
    const height = window.innerHeight;
    this.setState({ height });
  }

  render() {
    const { height } = this.state;
    const style = { height };

    const images = [
      "imgs/7/1.jpg",
      "imgs/7/2.jpg",
      "imgs/7/3.jpg",
      "imgs/7/4.jpg"
    ];

    return (
      <div className="day-container" style={style}>
        <div className='day-background-container' />
        <div className='card-container'>
          <div className="photo-container">
            <ImageGallery items={images} index='7' />
          </div>
          <div className="text-container">
            <div className="title">Lake Wanaka</div>
            <div className="description">
              I am Amogh Garg. I am currently living in Tokyo. I love travelling and exploring new places.
              I also like to spend my time reading nowel or doing nothing. And yes, I am a huge 9gager.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DaySeven;
