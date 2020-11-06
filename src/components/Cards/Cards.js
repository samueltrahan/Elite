import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

export default function Cards({ image, title, paragraph, path }) {
  return (
    <Link className="card-link" to={path}>
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
    </Link>
  );
}
