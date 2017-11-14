import React, { Component } from 'react';
import '../stylesheets/Home.css';

class Home extends Component {
  render() {
    return (
      <section className="home">
        <h2>Web Developer | Manager | Book Nerd</h2>
        <p>
          I'm Devin Miller, a web developer located in Seattle, WA. I'm a writer, whether it's poetry or documentation. I'm a history and comic book geek. My favorite rock in the world is on Vashon Island and my second favorite rock is the giant one next to the foot-bridge in Ravenna Park.
        </p>
        <div id="card-container">
          <div id="technical-list" className="list-card">
            <h3>What I know how to do...</h3>
            <ul>
              <li>Languages: Ruby, JavaScript, Python, HTML, CSS, SQL</li>
              <li>Frameworks & Libraries: Ruby on Rails, Sinatra, JQuery, AJAX, ReactJS</li>
              <li>Databases: PostgreSQL, SQLite3</li>
              <li>Workflows: Agile development, pair programming, constructive feedback</li>
              <li>Git, GitHub, Heroku, CircleCI</li>
            </ul>
          </div>
          <div id="personal-list" className="list-card">
            <h3>What I love to talk about...</h3>
            <ul>
              <li>Women's work during World War II</li>
              <li>Diversity, inclusion, bias, microaggressions in the tech industry</li>
              <li>Why you should be buying the book, dress, or record player you want from Goodwill on eBay</li>
              <li>The Unbeatable Squirrel Girl</li>
              <li>My cat, Oolong Kittea</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Home;
