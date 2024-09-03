import React from "react";
import AboutMe from "./AboutMe";
import Feedback from "./Feedback";
import Profile from './Profile';
import Portfolio from './Portfolio';

function Home() {
  return (
    <div className="Home">
        <Profile />
        <AboutMe />
        <Portfolio />
        <Feedback />
    </div>
  );
}

export default Home;