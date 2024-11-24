import React, { useState } from "react";
import './MagnifyingTextEffect.css'; // Import CSS file for styling

const MagnifyingTextEffect = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="container">
      <div
        className="text-box"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <h1 className={hovered ? "zoomed" : ""}>Find Your Book</h1>
         <img
          src="https://media1.giphy.com/media/HTSsuRrErs54g1Tqr5/200.gif?cid=790b76117e3jsiwi3j5j7wfu38b7pg09beonsv9yysaqj6nx&rid=200.gif&ct=s" // Example GIF URL, replace with your own
          alt="Zooming Magnifier"
          className="zoom-it"
        />
      </div>

      {/* Magnifying Glass (GIF) */}
      <div className={`magnifier ${hovered ? "active" : ""}`}>
        {/* <img
          src="https://media1.giphy.com/media/HTSsuRrErs54g1Tqr5/200.gif?cid=790b76117e3jsiwi3j5j7wfu38b7pg09beonsv9yysaqj6nx&rid=200.gif&ct=s" // Example GIF URL, replace with your own
          alt="Zooming Magnifier"
          className="zoom-it"
        /> */}
      </div>
    </div>
  );
};

export default MagnifyingTextEffect;
