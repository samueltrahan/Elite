import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

export default function Banner() {
  return (
    <section>
      <div className="bannder-heading">
        <header className="banner-header">
          <h1 id="elite-header" className="elite">
            Elite & React
          </h1>
        </header>
      </div>
      <Link className="author" to="/author">
        Author
      </Link>
      &nbsp;&nbsp;
      <Link className="tag" to="/tag">
        Tag
      </Link>
      &nbsp;&nbsp;
      <Link className="about" to="/about">
        About
      </Link>
    </section>
  );
}
