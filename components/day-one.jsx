import React from "react";
import ImageGallery from "./image-gallery.jsx";

class DayOne extends React.Component {

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

  componentWillUnmount() {
  }

  render() {
    const { height } = this.state;

    const style = {
      height
    };

    const images = [
      "imgs/1/1_1000.JPG",
      "imgs/1/2_1000.JPG",
      "imgs/1/3_1000.JPG",
      "imgs/1/4_1000.JPG",
      "imgs/1/5_1000.JPG",
      "imgs/1/6_1000.JPG",
      "imgs/1/7_1000.JPG"
    ];

    return (
      <div className="day-one-container" style={style}>
        <div className='card-container'>
          <div className="left-container">
            <ImageGallery items={images} index='1' />
          </div>
          <div className="right-container">
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
