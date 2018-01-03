import React, { Component } from 'react';
import githubLogo from '../images/GitHub-Mark-32px.png';
import linkedinLogo from '../images/In-Black-34px-TM.png';
import emailLogo from '../images/2000px-Aiga_mail.svg.png';

class Contact extends Component {
  render() {
    return(
      <div className="social-logos">
        <a href="mailto:devzmiller@gmail.com"><img src={emailLogo} className="social-logo" alt="my email"/></a>
        <a href="https://github.com/devzmiller" target="_blank"><img src={githubLogo} className="social-logo" alt="my github"/></a>
        <a href="https://www.linkedin.com/in/devzmiller/" target="_blank"><img src={linkedinLogo} className="social-logo" alt="my linkedin"/></a>
      </div>
    )
  }
}

export default Contact;
