import React, { useEffect, useState } from 'react';

import Type from './type'

const Profile = () => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, []);

  return (
    <div className="profile">
    <div className="profile-container">
      <div className={`text-section ${animation ? 'slide-in' : ''}`}>
      <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> TITLI KUNDU </strong>
              </h1>

              <div style={{ textAlign: "left" }}>
                <Type />
              </div>
      </div>
      <div className="image-container">
          <img
            src="pc11.jpeg" 
            alt="Background"
            className="background-image"
          />
          <img
            src="pc13.jpeg" 
            alt="Foreground"
            className="foreground-image"
          />
        </div>
    </div>
   
    </div>
  );
};

export default Profile;
