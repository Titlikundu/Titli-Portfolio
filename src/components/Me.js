// src/components/Me.js

import React from 'react';
import { FaPaintBrush, FaPalette, FaPencilAlt, FaArtstation } from 'react-icons/fa'; // Import some icons

const Me = () => {
  return (
    <div className="me-container">
      <div className="me-header">
        <img src="pc12.jpeg" alt="Titli Kundu" className="me-image" />
        <h1>About Me</h1>
      </div>
      
      <section className="me-section">
        <div className="icon">
          <FaPaintBrush />
        </div>
        <div className="me-content">
          <h2>Watercolor Painting</h2>
          <p>
            My journey with watercolor painting is a blend of fluidity and precision. The transparent layers of color allow me to create ethereal and dynamic compositions, capturing the essence of my subjects with a unique charm.
          </p>
        </div>
      </section>

      <section className="me-section">
        <div className="icon">
          <FaPalette />
        </div>
        <div className="me-content">
          <h2>Pastel Painting</h2>
          <p>
            Pastel painting is where my creativity flows freely. The soft texture and vibrant colors of pastels enable me to produce rich, tactile works that convey depth and emotion.
          </p>
        </div>
      </section>

      <section className="me-section">
        <div className="icon">
          <FaArtstation />
        </div>
        <div className="me-content">
          <h2>Creative Painting</h2>
          <p>
            My creative painting explores a variety of styles and techniques, embracing experimentation to push artistic boundaries. This approach allows me to continually evolve and produce innovative and engaging artwork.
          </p>
        </div>
      </section>

      <section className="me-section">
        <div className="icon">
          <FaPalette />
        </div>
        <div className="me-content">
          <h2>Oil Painting</h2>
          <p>
            With oil painting, I explore the richness and texture that this classic medium offers. The blending and layering capabilities of oil paints help me create works with depth, luminosity, and a timeless quality.
          </p>
        </div>
      </section>

      <section className="me-section">
        <div className="icon">
          <FaPencilAlt />
        </div>
        <div className="me-content">
          <h2>Pencil Sketching</h2>
          <p>
            Pencil sketching is where my artistic journey began. The simplicity of pencil and paper allows for detailed, expressive sketches that capture the essence of my subjects with subtlety and precision.
          </p>
        </div>
      </section>

      <section className="me-section">
        <div className="icon">
          <FaArtstation />
        </div>
        <div className="me-content">
          <h2>Pattachitra</h2>
          <p>
            Pattachitra is a traditional art form that I have embraced to add a cultural dimension to my work. The intricate patterns and themes of Pattachitra provide a historical and artistic richness that I integrate into my contemporary pieces.
          </p>
        </div>
      </section>

      <section className="me-footer">
        <h3>Let's Connect</h3>
        <p>
          I'm always open to new projects, collaborations, and conversations. 
          Feel free to reach out if you want to discuss ideas or simply chat about art.
        </p>
      </section>
    </div>
  );
};

export default Me;
