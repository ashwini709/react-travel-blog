import React from "react";
import ImageGallery from "./image-gallery.jsx";

class DayOne extends React.Component {

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
      "imgs/1/1.jpg",
      "imgs/1/2.jpg",
      "imgs/1/3.jpg",
      "imgs/1/4.jpg",
      "imgs/1/5.jpg",
      "imgs/1/6.jpg",
      "imgs/1/7.jpg",
      "imgs/1/8.jpg"
    ];

    return (
      <div className="day-container" style={style}>
        <div className='card-container'>
          <div className="photo-container">
            <ImageGallery items={images} index='1' />
          </div>
          <div className="text-container">
            <div className="title">AUCKLAND</div>
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

export default DayOne;
