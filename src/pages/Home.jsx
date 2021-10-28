import Particles from "react-particles-js";
import params from '../particles-config'
import React from "react";
import style from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <Particles
        params={params}
        className="particles__container"
      ></Particles>
      <div className={style.container}>
        <h2>Hi there! I am</h2>
        <h1>DENIS FERREYRA</h1>
        <h3>Full Stack Developer</h3>
        <p>
          Passionate about programming, solving logic problems or graphic
          challenges, when I program, I don't feel like it's a job, I love
          programming and I feel like I'm playing. I have a lot to offer, if you
          are interested, contact me in the form below. Regards.
        </p>
      </div>
    </>
  );
};
