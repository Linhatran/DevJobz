import React, { Component } from 'react';
import Job from './components/Job';
//import LoadMoreButton from './components/LoadMoreButton';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobsList: [],
    };
  }
  componentDidMount() {
    fetch('/api/')
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({ jobsList: data });
        },
        (err) => console.log('ERRORRR ', err)
      );
  }
  render() {
    const { jobsList } = this.state;
    return (
      <div>
        {jobsList.map((job, i) => (
          <Job info={job} key={`job-${i}`} />
        ))}
      </div>
    );
  }
}

export default App;
