import React, { Component } from 'react';
class LoadMoreButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('loaded jobs');
  }
  render() {
    return <button onClick={this.handleClick}>Load More Jobs</button>;
  }
}
export default LoadMoreButton;
