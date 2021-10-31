import Particles from "react-particles-js";
import params from "../particles-config";
import img_two from "../img/2.jpg";
import img_three from "../img/3.jpg";
import img_pi_one from "../img/1.png";
import img_pi_two from "../img/2.png";
import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiPostgresql,
  SiSequelize,
} from "react-icons/si";
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
      </div>
      <div className={style.tech}>
        <h3 style={{ padding: "30px" }}>TECHNOLOGIES</h3>
        <div className={style.techD}>
          <div className={style.divH}>
            <div className={style.div1}>JAVASCRIPT </div>
            <SiJavascript className={style.div2} />
          </div>
          <div className={style.divH}>
            <div className={style.div1}>TYPESCRIPT </div>
            <SiTypescript className={style.div2} />
          </div>
          <div className={style.divH}>
            <div className={style.div1}>REACT</div>
            <SiReact className={style.div2} />
          </div>
          <div className={style.divH}>
            <div className={style.div1}>REDUX</div>
            <SiRedux className={style.div2} />
          </div>
          <div className={style.divH}>
            <div className={style.div1}>NODE</div>
            <SiNodedotjs className={style.div2} />
          </div>
          <div className={style.divH}>
            <div className={style.div1}>POSTGRESQL</div>
            <SiPostgresql className={style.div2} />
          </div>
          <div className={style.divH}>
            <div className={style.div1}>SEQUELIZE</div>
            <SiSequelize className={style.div2} />
          </div>
        </div>
      </div>
      <div className={style.containerProjects}>
        <h2>MI PROJECTS</h2>
        <div className={style.project}>
          <h4>16BIT GAMESTORE</h4>
          <div className={style.projectImg}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: "8px",
                }}
              >
                <a href="https://16-bit-gamestore.vercel.app/" target="_blank">
                  <button className={style.button}>VIEW PROJECT</button>
                </a>
                <a
                  href="https://github.com/DenisOrlando/16Bit-GameStore"
                  target="_blank"
                >
                  <button className={style.button}>GITHUB REPO</button>
                </a>
              </div>
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: "8px",
                }}
              >
                <a
                  href="https://github.com/DenisOrlando/PI-Videogames-v2"
                  target="_blank"
                >
                  <button className={style.button}>GITHUB REPO</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <BsFillArrowUpCircleFill
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          size={40}
          className={style.buttonSide}
        />
      </div>
    </>
  );
};
