import React, { Component } from 'react';
import '../stylesheets/Contact.css'
import githubLogo from '../images/GitHub-Mark-64px.png';
import linkedinLogo from '../images/In-Black-66px-R.png';
import emailLogo from '../images/mail-logo-70px.png';
import resume from '../DevinMiller-Resume.pdf';

class Contact extends Component {
  render() {
    return(
      <section className="contact-buttons">
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
        <div className="resume-button">
          <a href={resume} target="_blank">Download My Resume</a>
        </div>
      </section>
    )
  }
}

export default Contact;
