import Particles from "react-particles-js";
import params from "../particles-config";
import img_one from "../img/1.jpg";
import img_two from "../img/2.jpg";
import img_three from "../img/3.jpg";
import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import style from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <Particles params={params} className="particles__container"></Particles>
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
        <BsFillArrowDownCircleFill
          onClick={() => window.scrollTo({ top: 420, behavior: "smooth" })}
          size={100}
          className={style.buttonDown}
        />
      </div>
      <div className={style.containerProjects}>
        <h2>MI PROJECTS</h2>
        <h4>16Bit GameStore (click here)</h4>
        <div>
          <img src={img_one} alt="img" />
          <img src={img_two} alt="img" />
          <img src={img_three} alt="img" />
        </div>
      </div>
    </>
  );
};
