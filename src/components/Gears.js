import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {content}
      </div>
    </div>
  );
};


const gearData = [
  {
    id: 1,
    image: 'https://m.media-amazon.com/images/I/51aoc2GVf7L.jpg',
    title: 'Paintbrushes',
    description: 'Different shapes and sizes for various strokes and techniques.',
    details: 'Types: Flat, Round, Angular, Fan. Essential for achieving various brush strokes and effects in painting.'
  },
  {
    id: 2,
    image: 'https://m.media-amazon.com/images/I/71gLwx5hN3L._SL1500_.jpg',
    title: 'Oil Paints',
    description: 'Rich pigments for vibrant and textured artwork.',
    details: 'Types: Linseed Oil, Turpentine, Various Colors. Used for creating vivid and textured paintings with a wide range of colors.'
  },
  {
    id: 3,
    image: 'https://m.media-amazon.com/images/I/61umg8SdckL.jpg',
    title: 'Canvas',
    description: 'Surface for painting, available in various textures and sizes.',
    details: 'Types: Stretched Canvas, Canvas Panels, Canvas Rolls. Provides a base for painting with different textures and formats.'
  },
  {
    id: 4,
    image: 'https://www.collinsdictionary.com/images/full/palette_79184476_1000.jpg',
    title: 'Palettes',
    description: 'Surface for mixing paints.',
    details: 'Types: Wooden, Plastic, Glass. Allows artists to blend and mix colors before applying them to the canvas.'
  },
  {
    id: 5,
    image: 'https://m.media-amazon.com/images/I/61GgvV5RpCL._AC_UF1000,1000_QL80_.jpg',
    title: 'Sketchbooks',
    description: 'For preliminary sketches and studies.',
    details: 'Types: Spiral-bound, Hardbound, Watercolor. Used for sketching ideas, making studies, and planning artwork.'
  },
  {
    id: 6,
    image: 'https://m.media-amazon.com/images/I/81qkGsiqdQL._SL1500_.jpg',
    title: 'Pastels',
    description: 'For vibrant, blendable color applications.',
    details: 'Types: Oil Pastels, Soft Pastels. Ideal for rich, vibrant colors and blending effects.'
  },
  {
    id: 7,
    image: 'https://m.media-amazon.com/images/I/71Xuw6Pdt2L._SL1000_.jpg',
    title: 'Acrylic Paints',
    description: 'Fast-drying paints with various finishes.',
    details: 'Types: Heavy Body, Fluid, High Flow. Offers a range of textures and finishes, and dries quickly.'
  },
  {
    id: 8,
    image: 'https://m.media-amazon.com/images/I/91D3Dg1KHnL.jpg',
    title: 'Rags and Paper Towels',
    description: 'For cleaning, wiping excess paint, and texture effects.',
    details: 'Types: Cotton Rags, Disposable Paper Towels. Useful for cleaning up spills and creating texture in paintings.'
  },
  {
    id: 9,
    image: 'https://m.media-amazon.com/images/I/71zVAJSZzOL._AC_UF1000,1000_QL80_.jpg',
    title: 'Fixatives',
    description: 'For protecting charcoal and pastel work.',
    details: 'Types: Spray Fixatives, Liquid Fixatives. Protects drawings and pastels from smudging and damage.'
  },
  {
    id: 10,
    image: 'https://m.media-amazon.com/images/I/71U2xIBej1L.jpg',
    title: 'Drawing Pencils',
    description: 'For sketching and detailed drawings.',
    details: 'Types: Graphite, Colored. Ideal for various types of sketches and detailed artwork.'
  },
  {
    id: 11,
    image: 'https://m.media-amazon.com/images/I/31d0WLiXljL._SY300_SX300_QL70_FMwebp_.jpg',
    title: 'Smudging Tools',
    description: 'For blending pencil and charcoal.',
    details: 'Types: Tortillons, Blending Stumps. Useful for blending and softening lines and shades.'
  },
  {
    id: 12,
    image: 'https://m.media-amazon.com/images/I/41mVx-dqj7L.jpg',
    title: 'Sculpting Tools',
    description: 'For creating three-dimensional artwork.',
    details: 'Types: Modeling Tools, Carving Tools. Used for shaping and carving materials in sculpture.'
  },
];

const Gears = () => {
  const [selectedGear, setSelectedGear] = useState(null);

  const handleGearClick = (gear) => {
    setSelectedGear(gear);
  };

  const handleCloseModal = () => {
    setSelectedGear(null);
  };

  return (
    <div className="gears-container">
      <header className="gears-header">
        <h1>My Gears & Tools</h1>
        <p>Discover the tools that transform my paints into living art.</p>
      </header>

      <section className="gears-section">
        {gearData.map((gear) => (
          <div key={gear.id} className="gear-item" onClick={() => handleGearClick(gear)}>
            <img src={gear.image} alt={gear.title} className="gear-image" />
            <h2>{gear.title}</h2>
            <p>{gear.description}</p>
          </div>
        ))}
      </section>

      <Modal
        isOpen={!!selectedGear}
        onClose={handleCloseModal}
        content={selectedGear && (
          <div>
            <h2>{selectedGear.title}</h2>
            <p>{selectedGear.details}</p>
            <img src={selectedGear.image} alt={selectedGear.title} className="gear-image" />
          </div>
        )}
      />
    </div>
  );
};

export default Gears;