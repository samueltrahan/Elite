import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header>
      <nav id="header">
        <a href="/">
          <img className="elite-logo" alt="" src="/images/elite.png" />
        </a>
        <div className="social-links" style={{ color: 'red' }}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/samueltrahan/"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
          &nbsp;&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/samueltrahan/Elite"
          >
            <i className="fab fa-github fa-2x" />
          </a>
        </div>
      </nav>
    </header>
  );
}
