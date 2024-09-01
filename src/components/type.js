import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
            "Fine Art Painter",
            "Portrait Painter",
            "Landscape Painter",
            "Creative Painter"
            
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;