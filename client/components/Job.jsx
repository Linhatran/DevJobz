import React, { Component } from 'react';
class Job extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const job = this.props.info;
    return (
      <div className='job-card'>
        <h3>
          {job.title} - {job.type}
        </h3>
        <p>Company: {job.company}</p>
        <p>Location: {job.location}</p>
        <p>Posted on: {job.created_at}</p>
      </div>
    );
  }
}
export default Job;
