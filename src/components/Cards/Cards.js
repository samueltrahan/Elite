import React from 'react';
import './Cards.css';

export default function Cards() {
  return (
    <div clasName="card-position">
      <div className="card">
        <div className="image">
          <img alt="" src="/images/elite.png" style={{ width: '140px' }} />
        </div>
        <div className="container">
          <h4>
            <b>About Elite & React</b>
          </h4>
          <p>
            Elite is a React Application template that can be used in a
            multitude of ways...
          </p>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img alt="" src="/images/elite.png" style={{ width: '140px' }} />
        </div>
        <div className="container">
          <h4>
            <b>About Elite & React</b>
          </h4>
          <p>
            Elite is a React Application template that can be used in a
            multitude of ways...
          </p>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img alt="" src="/images/elite.png" style={{ width: '140px' }} />
        </div>
        <div className="container">
          <h4>
            <b>About Elite & React</b>
          </h4>
          <p>
            Elite is a React Application template that can be used in a
            multitude of ways...
          </p>
        </div>
      </div>
    </div>
  );
}
