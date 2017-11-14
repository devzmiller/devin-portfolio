import React, { Component } from 'react';
import '../stylesheets/About.css'

class About extends Component {
  render() {
    return (
      <section className="about">
        <h2>About Me</h2>
        <p>
          Making useful things out of words and semicolons is my favorite form of magic. I get gleeful about a good debugging session. When I cook, I think, "how few times can I cross the kitchen and open the fridge", and when I code it’s the same story.
        </p>
        <p>
          Circa age 12 I learned HTML so I could make a Harry Potter fan site, and I spent a summer making computer games after attending a camp that taught me how. But I always had too many interests to choose from, and during high school and college I focused on co-running a theatre program, learning German, and drafting novels. At University of Washington I got to write papers about internet culture, but I hadn’t yet found time to dive back into coding.
        </p>
        <p>
          After graduating magna cum laude, I started working at Seattle Goodwill. I was promoted three times within three years, going from having no management experience to being Assistant Manager of a department of 100 people. While I loved exercising my communication skills, the part of the job I enjoyed most was troubleshooting and documenting software and machines. When I decided to find a new adventure, tech was the most exciting path.
        </p>
        <p>
          I'm known as a calm presence. I have a sense of humor about everything; people like working with me because I don't panic when things break. This served me well during Dev Bootcamp, where I absorbed massive amounts of information about programming with confidence that I could handle any new Ruby framework or JavaScript library I encountered.
        </p>
      </section>
    )
  }
}

export default About;
