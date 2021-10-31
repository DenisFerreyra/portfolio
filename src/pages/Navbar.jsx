import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <ul className={style.ul}>
      <li
        className={style.li}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        About
      </li>
      <li
        className={style.li}
        onClick={() => window.scrollTo({ top: 1038, behavior: "smooth" })}
      >
        Projects
      </li>
      <NavLink to="/contact" style={{ textDecoration: "none", color: "white" }}>
        <li className={style.li}>Contact</li>
      </NavLink>
    </ul>
  );
};
