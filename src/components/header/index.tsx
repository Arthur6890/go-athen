import React from "react";
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
          <a href="">Home</a>
          <a href="">Quem somos</a>
          <a href="">Esportes</a>
          <a href="">Siga-nos</a>
          <a href="" id={styles.giant}>
            Se torne um gigante!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
