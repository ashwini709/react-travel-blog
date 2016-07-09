import React from "react";
import ImageGallery from "./image-gallery.jsx";

class DayTwo extends React.Component {

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
      "imgs/2/1.jpg",
      "imgs/2/2.jpg",
      "imgs/2/3.jpg",
      "imgs/2/4.jpg",
      "imgs/2/5.jpg",
      "imgs/2/6.jpg",
      "imgs/2/7.jpg",
      "imgs/2/8.jpg",
      "imgs/2/9.jpg",
      "imgs/2/10.jpg",
      "imgs/2/11.jpg",
      "imgs/2/12.jpg"
    ];

    return (
      <div className="day-container" style={style}>
        <div className='card-container'>
          <div className="text-container arrow-right">
            <div className="title">Waitomo Caves</div>
            <div className="description">
              I am Amogh Garg. I am currently living in Tokyo. I love travelling and exploring new places.
              I also like to spend my time reading nowel or doing nothing. And yes, I am a huge 9gager.
            </div>
          </div>
          <div className="photo-container">
            <ImageGallery items={images} index='2' />
          </div>
        </div>
      </div>
    );
  }
}

export default DayTwo;
