import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="copy-right">&copy; 2020 Cinque Web Development</div>
      <div className="footer-links">
        <a className="foot" href="/">
          Home
        </a>
        &nbsp;&nbsp;
        <a className="foot" href="/tag">
          Tag
        </a>
        &nbsp;&nbsp;
        <a className="foot" href="/author">
          Author
        </a>
        &nbsp;&nbsp;
        <a className="foot" href="/about">
          About
        </a>
        &nbsp;&nbsp;
      </div>
    </footer>
  );
}
