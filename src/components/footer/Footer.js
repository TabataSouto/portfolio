import React from 'react';
import { Link } from 'react-router-dom';
import gitHubIcon from '../../images/github.png';
import linkedinIcon from '../../images/linkedin.png';
import gmailIcon from '../../images/gmail.png';

function Footer() {
  return(
    <footer>
      <nav>
        <Link to="/">
          <img
            src={ linkedinIcon }
            alt="Clique para acessar meu Linkedin"
            width='100'
          />
          <img
            src={ gitHubIcon }
            alt="Clique para acessar meu GitHub"
            width='100'
          />
          <img
            src={ gmailIcon }
            alt="Clique para acessar meu E-mail"
            width='100'
          />
        </Link>
      </nav>
    </footer>
  )
}

export default Footer;
