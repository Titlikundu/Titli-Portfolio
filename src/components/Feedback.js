import React, { useState } from "react";

const feedbacks = [
  {
    name: "Pratiti Gupta",
    text: "Titli’s paintings are so full of life and color. Every piece she makes has something special about it that really draws you in. I always look forward to seeing what she’ll create next.",
    image: "f4.png"
  },
  {
    name: "Nishit Saha",
    text: "Her work is beautiful and inspiring. I’ve seen her explore different styles. She has a real gift for capturing emotion in her paintings..",
    image: "f2.jpg",
  },
  {
    name: "Piyu Basak",
    text: "I love how natural her art looks. She has a way of making even the simplest subjects look extraordinary.",
    image: "f1.png",
  },
  {
    name: "Rithik Saha",
    text: "Titli’s art makes me feel connected to the world around me. There’s a warmth and sincerity in everything she does.",
    image: "f3.jpg",
  },

];

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, text, image } = feedbacks[currentIndex];

  return (
    <div className="feedback-container">
      <button className="arrow-button" onClick={handlePrevious}>
        {"<"}
      </button>
      <div className="feedback-content">
        <div className="feedback-text">
          <h2>What People Say</h2>
          <h3>{name}</h3>
          <p>{text}</p>
        </div>
        <div className="feedback-image">
          <img src={image} alt={name} />
        </div>
      </div>
      <button className="arrow-button" onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
};

export default Feedback;
