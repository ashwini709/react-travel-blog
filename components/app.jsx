import React from "react";
import Header from "./header.jsx";

import Home from './home.jsx';
import DayOne from './day-one.jsx';
import DayTwo from './day-two.jsx';
import DayThree from './day-three.jsx';
import DayFour from './day-four.jsx';
import DayFive from './day-five.jsx';
import DaySix from './day-six.jsx';

import '../styles/app.less';

class App extends React.Component {

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
      <div className="fake-container">
        <Header />
        <div className='app-content'>
          <div className='day-background-container' style={style} />
          <Home />
          <DayOne />
          <DayTwo />
          <DayThree />
          <DayFour />
          <DayFive />
          <DaySix />
        </div>
      </div>
    );
  }
}

App.contextTypes = {
  router: function () {
    return React.PropTypes.func.isRequired;
  }
};

export default App;


