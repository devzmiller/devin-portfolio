import React, { Component } from 'react';
import '../stylesheets/Contact.css'
import githubLogo from '../images/GitHub-Mark-64px.png';
import linkedinLogo from '../images/In-Black-66px-R.png';
import emailLogo from '../images/mail-logo-70px.png';
import resumeLogo from '../images/resume.png';
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
            <a href="https://github.com/devzmiller" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="my github"/></a>
            <p>Explore my code on GitHub.</p>
          </div>
          <div className="social-logo">
            <a href="https://www.linkedin.com/in/devzmiller/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="my linkedin"/></a>
            <p>Connect with me on LinkedIn.</p>
          </div>
          <div className="social-logo">
            <a href={resume} target="_blank" rel="noopener noreferrer"><img src={resumeLogo} alt="my resume (PDF)"/></a>
            <p>Download my resume.</p>
          </div>
        </div>
        <div id="license">
          <a href="https://www.iconfinder.com/icons/2530001/cv_document_employee_hiring_portfolio_profile_resume_icon_icon#size=64" target="_blank" rel="noopener noreferrer">Resume icon</a> by <a href="https://www.iconfinder.com/Louiseme" target="_blank" rel="noopener noreferrer">Eva Kufulium</a> is licensed under <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>
        </div>
      </section>
    )
  }
}

export default Contact;
