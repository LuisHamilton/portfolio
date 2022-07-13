import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              MyPortfolio
            </Link>
          </div>
          <small className='website-rights'>LuisCOPYRIGHT © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              target='_blank'
              to={{ pathname: "https://web.facebook.com/profile.php?id=100008068067705" }}
              aria-label='Facebook'
            >   
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to={{ pathname: "https://www.instagram.com/lu1s_h4m1lt0n/" }}
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to={{ pathname: "https://www.youtube.com/channel/UCPRJt3ut8Fsd5iOBjNxMBZw" }}
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to={{ pathname: "https://twitter.com/SrHamitun" }}
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link linkedin'
              to={{ pathname: "https://www.linkedin.com/in/luis-hamilton-balem-331116179/" }}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
