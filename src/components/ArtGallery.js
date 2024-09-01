import React, { useState, useEffect } from 'react';

// Updated artPieces array with categories
const artPieces = [
  { id: 1, title: 'Watercolor Piece 1', imgSrc: 'pc6.jpeg', category: 'Watercolor Paintings' },
  { id: 2, title: 'Pastel Piece 1', imgSrc: 'p14.jpeg', category: 'Pastel Paintings' },
  { id: 3 , title: 'Pattachitra 1', imgSrc: 'p7.jpeg', category: 'Pattachitra' },
  { id: 4, title: 'Oil Painting 1', imgSrc: 'pc3.jpeg', category: 'Oil Paintings' },
  { id: 5 , title: 'pencil sketch 1', imgSrc: 'p13.jpeg', category: 'pencil sketch' },
  { id: 6, title: 'Watercolor Piece 2', imgSrc: 'pc5.jpeg', category: 'Watercolor Paintings' },
  { id: 7, title: 'Oil Painting 2', imgSrc: 'pc4.jpeg', category: 'Oil Paintings' },
  { id: 8 , title: 'pencil sketch 2', imgSrc: 'p19.jpeg', category: 'pencil sketch' },
  { id: 9 , title: 'Creative drawing', imgSrc: 'p11.jpeg', category: 'creative Paintings' },
  { id: 10, title: 'Watercolor Piece 3', imgSrc: 'pc1.jpeg', category: 'Watercolor Paintings' },
  { id: 11 , title: 'pencil sketch 3', imgSrc: 'p12.jpeg', category: 'pencil sketch' },
  { id: 12, title: 'Pastel Piece 2', imgSrc: 'p5.jpeg', category: 'Pastel Paintings' },
  { id: 13 , title: 'pencil sketch 4', imgSrc: 'p2.jpeg', category: 'pencil sketch' },
  { id: 14, title: 'Watercolor Piece 4', imgSrc: 'p8.jpeg', category: 'Watercolor Paintings' },
  { id: 15, title: 'Oil Painting 3', imgSrc: 'p18.jpeg', category: 'Oil Paintings' },
  { id: 16 , title: 'pencil sketch 5', imgSrc: 'p1.jpeg', category: 'pencil sketch' },
  { id: 17, title: 'Watercolor Piece 5', imgSrc: 'p16.jpeg', category: 'Watercolor Paintings' },
  { id: 18 , title: 'Pattachitra 2', imgSrc: 'p6.jpeg', category: 'Pattachitra' },
  { id: 19 , title: 'Paper collage 1', imgSrc: 'p15.jpeg', category: 'Paper collage' },
  { id: 20, title: 'Watercolor Piece 6', imgSrc: 'p17.jpeg', category: 'Watercolor Paintings' },
  { id: 21, title: 'Pastel Piece 2', imgSrc: 'pc8.jpeg', category: 'Pastel Paintings' },
  { id: 22, title: 'pencil sketch 6', imgSrc: 'p3.jpeg', category: 'pencil sketch' },
  { id: 23, title: 'Watercolor Piece 7', imgSrc: 'pc2.jpeg', category: 'Watercolor Paintings' },
  { id: 24, title: 'pencil sketch 7', imgSrc: 'p4.jpeg', category: 'pencil sketch' },
  { id: 25 , title: 'Creative drawing 1', imgSrc: 'p22.jpeg', category: 'creative Paintings' },
  { id: 26, title: 'Watercolor Piece 8', imgSrc: 'p9.jpeg', category: 'Watercolor Paintings' },
  { id: 27, title: 'pencil sketch 8', imgSrc: 'p10.jpeg', category: 'pencil sketch' },
  { id: 28, title: 'Watercolor Piece 9', imgSrc: 'p20.jpeg', category: 'Watercolor Paintings' },
  { id: 29, title: 'Watercolor Piece 10', imgSrc: 'p21.jpeg', category: 'Watercolor Paintings' },
  { id: 30, title: 'Watercolor Piece 11', imgSrc: 'pc7.jpeg', category: 'Watercolor Paintings' },



  

  
  // Add more pieces as needed
];

const categories = ['All', 'Watercolor Paintings', 'Pastel Paintings' ,'Oil Paintings', 'Pattachitra', 'pencil sketch' , 'creative Paintings' , 'Paper collage' ];

const ArtGallery = () => {
  const [selectedArt, setSelectedArt] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const openModal = (art) => {
    setSelectedArt(art);
  };

  const closeModal = () => {
    setSelectedArt(null);
  };

  // Filter art pieces based on the selected category
  const filteredArtPieces = selectedCategory === 'All'
    ? artPieces
    : artPieces.filter(art => art.category === selectedCategory);

  useEffect(() => {
    if (selectedArt) {
      document.querySelector('.close')?.focus();
    }
  }, [selectedArt]);

  return (
    <section id="Art" className="gallery">
      <h1 className="gallery-heading">Welcome to My Galleria</h1>

      {/* Category Filter Buttons */}
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
            aria-label={`Show ${category}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Art Grid */}
      <div className="art-grid">
        {filteredArtPieces.map((art) => (
          <div
            key={art.id}
            className="art-item"
            onClick={() => openModal(art)}
            role="button"
            tabIndex="0"
            aria-label={`View details for ${art.title}`}
          >
            <img
              src={art.imgSrc}
              alt={art.title}
              className="art-image"
              loading="lazy"
            />
            <h3>{art.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedArt && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <button
              className="close"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedArt.imgSrc}
              alt={selectedArt.title}
              className="modal-image"
            />
            <h3 id="modal-title">{selectedArt.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArtGallery;
