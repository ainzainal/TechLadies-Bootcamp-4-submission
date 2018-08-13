import React from "react";

export class About extends React.Component {
  render() {
    return (
      <div className="aboutMe">
        <h1> About Me </h1>
        <img
          src={require("./images/a.jpg")}
          className="imgAbout"
          alt="Mugshot"
        />
        <p>
          <br />
          Hello! I am Ain and I am 26 this year. I have been in the
          communications/ public relations industry for about 3 years now.
          <br />
          <br />
          Besides writing press releases and media materials for events and
          programmes, I enjoy
          <ul>
            <li>playing video games. Alot of video games. Dota anyone? </li>
            <li>trying to beat my 10km personal best</li>
            <li>drawing. I try to sketch whenever I have some free time. </li>
          </ul>
          A year ago, I started feeling a little lost in my career and find that
          I do not love what I do. And who wants to keep working on something
          that they do not love? So i decided to try out a few different career
          paths, i got involved with learning how to give care to persons with
          mental illness, to attending a yoga retreat and also tried my hand at
          dj-ing. At the end of this whole self-exploration journey, it led me
          to venturing into the tech industry. Coming from a predominantly arts
          background, learning about the various functions, and objects, and
          states seemed so foreign to me.
          <br />
          <br />
          At first.
          <br />
          <br />
          I have only recently tried picking up HTML and CSS on my own as a
          personal extra currcular activity for myself before stumbling upon the
          Techladies info session. Techladies is my first 'real' foray into the
          world of coding. I attended the first info session with the
          understanding that it was an introduction to Javascript and the markup
          languages. But what I did not know was that, that first info session
          not only gave me an opportunity work on my first real application, it
          also provided networking opportunities with like-minded, and very
          talented ladies.
          <br />
          <br />
          To be perfectly honest, my understanding of Javascript and React is
          basic at best. Through working on the technical task, I found myself
          asking so many questions, watching multiple videos and only to go back
          to square one. I have to say though, I am really enjoying this
          process- of trial and error, of being so frustrated with my code only
          to realise that I needed to capitalise ONE letter (true story) and of
          course, when everything comes together and the code FINALLY works.
          <br />
          <br />
          Regardless of the outcome of this, it has been a very fulfilling
          experience, and I have learnt SO much. I am eternally grateful to
          everyone who has helped me out along the way (sorry for sucking so
          much, lol). But thank you for all your help- no matter big or small! 
          <br/>
          <br/>          
          I think it will be a good time to end with a
          picture of my bunny- Tootie. If you click on her picture, you can see
          what she's up to. Daily updates courtesy of my sisters.
          <br />
          <br />
          <a href="https://www.instagram.com/tootiethefruitee/">
            <img
              src={require("./images/bunny.jpg")}
              className="imgTootie"
              alt="Bunny"
            />
          </a>
        </p>
      </div>
    );
  }
}
