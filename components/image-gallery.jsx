import React from "react";
import Swipe from "swipe-js";

require('../styles/image-gallery.less');

class ImageGallery extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mySwipe: null
    };

  }

  componentDidMount() {
    const ids = 'slider' + this.props.index;

    const mySwipe = Swipe(document.getElementById(ids), {
      startSlide: 0,
      speed: 400
    });

    this.setState({ mySwipe });

  }

  componentWillUnmount() {
  }

  slideLeft() {
    const { mySwipe } = this.state;

    mySwipe.prev();

  }

  slideRight() {
    const { mySwipe } = this.state;

    mySwipe.next();
  }

  render() {
    const { counter } = this.state;
    const { items } = this.props;

    const total = items.length;

    const listItems = items.map((image, index) => {
      return (
        <div className="image" key={index} ><img src={image} /><div className='index'>{index+1}/{total}</div></div>
      );
    });

    const ids = 'slider' + this.props.index;

    return (
      <div className="image-gallery">
        <div id={ids} className='swipe'>
          <div className='swipe-wrap'>
            {listItems}
          </div>
        </div>
        <a className='image-gallery-left-nav' onTouchStart={this.slideLeft.bind(this)} onClick={this.slideLeft.bind(this)}/>
        <a className='image-gallery-right-nav' onTouchStart={this.slideRight.bind(this)} onClick={this.slideRight.bind(this)}/>
      </div>
    );
  }
}

export default ImageGallery;
