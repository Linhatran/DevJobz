import React, { Component, useState, useEffect } from 'react';
import Job from './components/Job';
import { Button } from 'react-bootstrap';

function App() {
  const [jobsList, setJobsList] = useState([]);
  useEffect(() => {
    fetch('/api/')
      .then((res) => res.json())
      .then(
        (data) => {
          setJobsList(data);
        },
        (err) => console.log('ERRORRR ', err)
      );
  }, []);
  return (
    <div>
      <Button className='btn-primary'>Search</Button>
      {jobsList.map((job, i) => (
        <Job info={job} key={`job-${i}`} />
      ))}
    </div>
  );
}

export default App;
