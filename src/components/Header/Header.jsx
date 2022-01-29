import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import css from "./Header.module.css";

function Header({ title, sub }) {
  return (
    <div className={css.container}>
      <h1 className={css.wiki}>{title}</h1>
      <h1 className={css.pigeon}>{sub}</h1>
      <FontAwesomeIcon className={css.icon} icon={faDove} size="2x" />
    </div>
  );
}

export default Header;
