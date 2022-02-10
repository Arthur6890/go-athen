import React from "react";
import { Link } from "react-router-dom";
import { AtenaLogo } from "../../assets/svg/index";
import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <div className={styles.blurBackground}>
          <h1>#SomosAtena</h1>
          <div className={styles.teste}>
            <h1 className={styles.left}>#Somos</h1>
            <h1 className={styles.right}>Atena</h1>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <AtenaLogo />
        <div className={styles.sections}>
          <Link to="/" replace>
            Home
          </Link>
          <Link to="/about" replace>
            Quem Somos
          </Link>
          <Link to="/sports">Esportes</Link>
          <a
            href="https://www.instagram.com/aaaicex/"
            target="_blank"
            rel="noreferrer"
          >
            Siga-nos
          </a>
          <a
            id={styles.giant}
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdLHowQOZFoNzgxAib62kSQozGBP4Y6hbqiwJZJ-XwkznNxSQ/viewform"
          >
            Seja um gigante!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
