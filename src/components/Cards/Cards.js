import React from 'react';
import './Cards.css';

export default function Cards({ image, title, paragraph }) {
  return (
    <div className="card">
      <div className="image">
        <img alt="" src={image} style={{ width: '140px' }} />
      </div>
      <div className="container">
        <h4>
          <b>{title}</b>
        </h4>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
