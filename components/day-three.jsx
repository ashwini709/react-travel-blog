import React from "react";
import ImageGallery from "./image-gallery.jsx";

class DayThree extends React.Component {

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
      "imgs/3/1.jpg",
      "imgs/3/2.jpg",
      "imgs/3/3.jpg",
      "imgs/3/4.jpg",
      "imgs/3/5.jpg",
      "imgs/3/6.jpg",
      "imgs/3/7.jpg",
      "imgs/3/8.jpg",
      "imgs/3/9.jpg",
      "imgs/3/10.jpg",
      "imgs/3/11.jpg",
      "imgs/3/12.jpg"
    ];

    return (
      <div className="day-container" style={style}>
        <div className='day-background-container' />
        <div className='card-container'>
          <div className="photo-container">
            <ImageGallery items={images} index='3' />
          </div>
          <div className="text-container">
            <div className="title">Hobbiton & Hells Gate</div>
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

export default DayThree;
