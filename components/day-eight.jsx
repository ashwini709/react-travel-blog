import React from "react";
import ImageGallery from "./image-gallery.jsx";

class DayEight extends React.Component {

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
      "imgs/8/1.jpg",
      "imgs/8/2.jpg",
      "imgs/8/3.jpg",
      "imgs/8/4.jpg",
      "imgs/8/5.jpg",
      "imgs/8/6.jpg",
      "imgs/8/7.jpg",
      "imgs/8/8.jpg",
      "imgs/8/9.jpg",
      "imgs/8/10.jpg"
    ];

    return (
      <div className="day-container" style={style}>
        <div className='day-background-container' />
        <div className='card-container'>
          <div className="text-container arrow-right">
            <div className="title">Milford Sound</div>
            <div className="description">
              I am Amogh Garg. I am currently living in Tokyo. I love travelling and exploring new places.
              I also like to spend my time reading nowel or doing nothing. And yes, I am a huge 9gager.
            </div>
          </div>
          <div className="photo-container">
            <ImageGallery items={images} index='8' />
          </div>
        </div>
      </div>
    );
  }
}

export default DayEight;
