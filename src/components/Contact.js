import React, { Component } from 'react';
import '../stylesheets/Contact.css'
import githubLogo from '../images/GitHub-Mark-64px.png';
import linkedinLogo from '../images/In-Black-66px-R.png';
import emailLogo from '../images/mail-logo-70px.png';

class Contact extends Component {
  render() {
    return(
      <div className="social-logos">
        <div className="social-logo">
          <a href="mailto:devzmiller@gmail.com"><img src={emailLogo} alt="my email"/></a>
          <p>Send me an email.</p>
        </div>
        <div className="social-logo">
          <a href="https://github.com/devzmiller" target="_blank"><img src={githubLogo} alt="my github"/></a>
          <p>Explore my code on GitHub.</p>
        </div>
        <div className="social-logo">
          <a href="https://www.linkedin.com/in/devzmiller/" target="_blank"><img src={linkedinLogo} alt="my linkedin"/></a>
          <p>Connect with me on LinkedIn.</p>
        </div>
      </div>
    )
  }
}

export default Contact;
