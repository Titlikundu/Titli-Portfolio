import React from "react";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-image-section">
        <img
          src="pc12.jpeg" 
          alt="Titli kundu"
          className="about-me-image"
        />
      </div>
      <div className="about-me-text-section">
        <h2>About Me</h2>
        <p>
        Hi! I'm Titli Kundu, and I've been painting for more than six years now. 
        My journey with art started as a simple hobby, but over time, it has evolved into a passion. 
        I’ve had the joy of working with a variety of mediums.
        </p>
        <p>
        For me, Art is such a personal and fulfilling journey for me, and through my paintings, 
        I hope to share a little bit of that joy and inspiration with others. 
        Whether it's the soft flow of watercolor, the boldness of oil paints, or the intricate details of pattachitra.
        </p>
        <p>
        Feel free to explore my portfolio and join me in this colorful journey, where every painting tells a unique story!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
