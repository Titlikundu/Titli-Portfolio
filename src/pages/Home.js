import React from "react";
import AboutMe from "../components/AboutMe";
import Feedback from "../components/Feedback";
import Profile from '../components/Profile';
import Portfolio from '../components/Portfolio';

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