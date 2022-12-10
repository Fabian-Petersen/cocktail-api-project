import React from "react";

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">About</h1>
      <p>
        A project created with React to show of various cocktails. The
        information is from the public API "thecocktaildb.com". The skills
        showcased in this projects is as follows:
      </p>
      <ul>
        <li> Fetch Data from API using Axios library</li>
        <li> CReate Search Functionality for a single product.</li>
        <li> Use of React Router version 6</li>
      </ul>
      <p>
        It was fun to create the project and work on the functionality to
        improve my skills as a REACT Front End Developer. Further updates will
        be made to improve the UI/UX of the site,...Stay tuned!!
      </p>
    </section>
  );
};

export default About;
