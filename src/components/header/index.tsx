import React from "react";
import { Link } from "react-router-dom";
import { AtenaLogo } from "../../assets/svg/index";
import banner from "../../assets/images/banner2.png";
import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <img src={banner} alt="" />
        <div className={styles.blurBackground}>
          <h1>#VemPraAtena</h1>
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
