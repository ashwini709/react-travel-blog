import React from "react";

import '../styles/home.less';

class Home extends React.Component {

  constructor(props, context) {
    super(props, context);

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

    return (
      <div className="home-container" style={style}>
        <div className="background-container" />
        <div className="title-box">
          <div className="travel-year">TRAVEL 2016</div>
          <div className="travel-location">NEWZEALAND</div>
        </div>
      </div>
    );
  }
}

export default Home;

