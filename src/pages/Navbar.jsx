import React from "react";
import style from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <ul className={style.ul}>
      <li className={style.li}>About</li>
      <li className={style.li}>Projects</li>
      <li className={style.li}>Contact</li>
    </ul>
  );
};
