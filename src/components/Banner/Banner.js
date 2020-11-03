import React from 'react';
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
      <a className="author" href="/author">
        Author
      </a>
      &nbsp;&nbsp;
      <a className="tag" href="/tag">
        Tag
      </a>
      &nbsp;&nbsp;
      <a className="about" href="/about">
        About
      </a>
    </section>
  );
}
