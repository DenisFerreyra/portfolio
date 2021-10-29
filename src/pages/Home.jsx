import Particles from "react-particles-js";
import params from "../particles-config";
import img_two from "../img/2.jpg";
import img_three from "../img/3.jpg";
import img_pi_one from "../img/1.png";
import img_pi_two from "../img/2.png";
import React, { useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import style from "./Home.module.css";

export const Home = () => {
  const [pointer, setClicked] = useState(false);

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
          onClick={() => window.scrollTo({ top: 1036, behavior: "smooth" })}
          size={100}
          className={style.buttonDown}
        />
      </div>
      <div className={style.containerProjects}>
        <h2>MI PROJECTS</h2>
        <div className={style.project}>
          <h4>16BIT GAMESTORE</h4>
          <div className={style.projectImg}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img className={style.img} src={img_two} alt="img" />
              <img className={style.img} src={img_three} alt="img" />
            </div>
            <div style={{ textAlign: "center", padding: "10px" }}>
              <div style={{ height: "70%" }}>
                This is a groupal project maded for the Henry's bootcamp, in
                this project we worked in front-end with: TypeScript, React,
                Redux, and in the back-end we worked with JavaScript, Express,
                NodeJS, PostgreSQL and Sequelize.
              </div>
              <a href="https://16-bit-gamestore.vercel.app/" target="_blank">
                <button className={style.button}>VIEW PROJECT</button>
              </a>
              <a href="https://github.com/DenisOrlando/16Bit-GameStore" target="_blank">
                <button className={style.button}>GITHUB REPO</button>
              </a>
            </div>
          </div>
        </div>
        <div className={style.project}>
          <h4>INDIVIDUAL PROJECT: VIDEOGAMES</h4>
          <div className={style.projectImg}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img className={style.img} src={img_pi_one} alt="img" />
              <img className={style.img} src={img_pi_two} alt="img" />
            </div>
            <div style={{ textAlign: "center", padding: "10px" }}>
              <div style={{ height: "70%" }}>
                This is a groupal project maded for the Henry's bootcamp, in
                this project we worked in front-end with: TypeScript, React,
                Redux, and in the back-end we worked with JavaScript, Express,
                NodeJS, PostgreSQL and Sequelize.
              </div>
              <a href="https://github.com/DenisOrlando/PI-Videogames-v2" target="_blank">
                <button className={style.button}>GITHUB REPO</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
