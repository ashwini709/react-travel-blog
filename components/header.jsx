import React from "react";
import { IndexLink, Link } from 'react-router';
import classNames from 'classnames';

import '../styles/header.less';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: 0,
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

    const windowInnerHeight = window.innerHeight;
    const index = Math.floor((window.pageYOffset + windowInnerHeight/2) / windowInnerHeight);
    if (this.state.show != index) {
      this.setState({ show: index });
    }
  }

  scrollToDay(index) {
    const height = window.innerHeight * index;
    window.scrollTo(0, height);
    this.setState({ show: index });
  }

  scrollToHome() {
    window.scrollTo(0, 0);
  }

  checkActive(day) {
    return (day == this.state.show) ? 'scroll-to-day active' : 'scroll-to-day';
  }

  render() {
    const { visible } = this.state;

    return (
      <div className={classNames('header-container', { visible })}>
        <div className={this.checkActive(0)} onClick={this.scrollToDay.bind(this, 0)} >HOME</div>
        <div className={this.checkActive(1)} onClick={this.scrollToDay.bind(this, 1)} >DAY 1</div>
        <div className={this.checkActive(2)} onClick={this.scrollToDay.bind(this, 2)} >DAY 2</div>
        <div className={this.checkActive(3)} onClick={this.scrollToDay.bind(this, 3)} >DAY 3</div>
        <div className={this.checkActive(4)} onClick={this.scrollToDay.bind(this, 4)} >DAY 4</div>
        <div className={this.checkActive(5)} onClick={this.scrollToDay.bind(this, 5)} >DAY 5</div>
        <div className={this.checkActive(6)} onClick={this.scrollToDay.bind(this, 6)} >DAY 6</div>
        <div className={this.checkActive(7)} onClick={this.scrollToDay.bind(this, 7)} >DAY 7</div>
        <div className={this.checkActive(8)} onClick={this.scrollToDay.bind(this, 8)} >DAY 8</div>
        <div className='title' onClick={this.scrollToHome.bind(this)}>NEW ZEALAND</div>
      </div>
    );
  }
}

export default Header;
