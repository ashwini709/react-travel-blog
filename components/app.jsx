import React from "react";
import Header from "./header.jsx";

import Home from './home.jsx';
import DayOne from './day-one.jsx';
import DayTwo from './day-two.jsx';
import DayThree from './day-three.jsx';
import DayFour from './day-four.jsx';
import DayFive from './day-five.jsx';
import DaySix from './day-six.jsx';
import DaySeven from './day-seven.jsx';
import DayEight from './day-eight.jsx';

import '../styles/app.less';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      height: 0
    };

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const height = window.innerHeight;

    if (this.state.height != height) {
      this.setState({ height });
    }
  }

  render() {
    const style = this.state;

    return (
      <div className="fake-container">
        <Header />
        <div className='app-content'>
          <div className='day-background-container' style={style} />
          <Home style={style} />
          <DayOne style={style} />
          <DayTwo style={style} />
          <DayThree style={style} />
          <DayFour style={style} />
          <DayFive style={style} />
          <DaySix style={style} />
          <DaySeven style={style} />
          <DayEight style={style} />
        </div>
      </div>
    );
  }
}

export default App;


