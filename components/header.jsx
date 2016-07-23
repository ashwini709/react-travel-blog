import React from "react";
import { IndexLink, Link } from 'react-router';
import classNames from 'classnames';

import pageState from '../states/page.js';

import '../styles/header.less';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: pageState.active.valueOf(),
      visible: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToDay = this.scrollToDay.bind(this);
    this.pageStateChanged = this.pageStateChanged.bind(this);
  }

  componentDidMount() {
    pageState.on('readable', this.pageStateChanged);

    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    pageState.removeListener('readable', this.pageStateChanged);

    window.removeEventListener('scroll', this.handleScroll);
  }

  pageStateChanged() {
    this.setState({ active: pageState.active.valueOf() });
  }

  handleScroll() {
    if (window.pageYOffset > 45 && !this.state.visible) {
      this.setState({ visible: true });
    } else if (window.pageYOffset <= 45 && this.state.visible) {
      this.setState({ visible: false });
    }

    const windowInnerHeight = window.innerHeight;
    const index = Math.floor((window.pageYOffset + windowInnerHeight/2) / windowInnerHeight);
    if (pageState.active.valueOf() != index) {
      pageState.active.assign(index);
    }
  }

  scrollToDay(index) {
    const height = window.innerHeight * index;
    window.scrollTo(0, height);
    pageState.active.assign(index);
  }

  checkActive(day) {
    return (day == pageState.active.valueOf()) ? 'scroll-to-day active' : 'scroll-to-day';
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
        <div className='title' onClick={this.scrollToDay.bind(this, 0)}>NEW ZEALAND</div>
      </div>
    );
  }
}

export default Header;
