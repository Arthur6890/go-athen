import React from "react";
import { Link } from "react-router-dom";
import { AtenaLogo } from "../../assets/svg/index";
import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <div className={styles.blurBackground}>
          <h1 className={styles.left}>#somos</h1>
          <h1 className={styles.right}>atena</h1>
        </div>
      </div>
      <div className={styles.content}>
        <AtenaLogo />
        <div className={styles.sections}>
          <Link to="/" replace>
            Home
          </Link>
          <Link to="about" replace>
            Quem Somos
          </Link>
          <a href="https://www.instagram.com/aaaicex/">Esportes</a>
          <a href="https://www.instagram.com/aaaicex/">Siga-nos</a>
          <a href="https://www.instagram.com/aaaicex/" id={styles.giant}>
            Seja um gigante!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
