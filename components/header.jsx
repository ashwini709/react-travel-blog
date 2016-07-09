import React from "react";
import { IndexLink, Link } from 'react-router';
import classNames from 'classnames';

import '../styles/header.less';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      visible: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToDay = this.scrollToDay.bind(this);
    this.scrollToHome = this.scrollToHome.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > 45 && !this.state.visible) {
      this.setState({ visible: true });
    } else if (window.pageYOffset <= 45 && this.state.visible) {
      this.setState({ visible: false });
    }
  }

  scrollToDay(index) {
    const height = window.innerHeight * index;
    window.scrollTo(0, height);
  }

  scrollToHome() {
    window.scrollTo(0, 0);
  }

  render() {
    const { visible, slideMenuOpen } = this.state;

    return (
      <div className={classNames('header-container', { visible })}>
        <div className='scroll-to-day' onClick={this.scrollToDay.bind(this, 0)} >HOME</div>
        <div className='scroll-to-day' onClick={this.scrollToDay.bind(this, 1)} >DAY 1</div>
        <div className='scroll-to-day' onClick={this.scrollToDay.bind(this, 2)} >DAY 2</div>
        <div className='scroll-to-day' onClick={this.scrollToDay.bind(this, 3)} >DAY 3</div>
        <div className='scroll-to-day' onClick={this.scrollToDay.bind(this, 4)} >DAY 4</div>
        <div className='scroll-to-day' onClick={this.scrollToDay.bind(this, 5)} >DAY 5</div>
        <div className='scroll-to-day' onClick={this.scrollToDay.bind(this, 6)} >DAY 6</div>

        <div className='title' onClick={this.scrollToHome.bind(this)}>
          NEWZEALAND
        </div>
      </div>
    );
  }
}

export default Header;
