import React from "react";
import { Link } from "react-router-dom";
import { AtenaLogo } from "../../assets/svg/index";
import AtenaLogoImg from "../../assets/images/SIMBOLO2.png";
import banner from "../../assets/images/banner2.png";
import styles from "./styles.module.scss";

type props = {
  hide?: boolean;
  title?: string;
};

function Header({ hide, title }: props) {
  return (
    <>
      {!hide && (
        <div className={styles.main}>
          <div className={styles.image}>
            <img src={banner} alt="" />
            <div className={styles.blurBackground}>
              <h1>{title}</h1>
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
      )}

      {hide && (
        <div className={styles.main}>
          <div className={`${styles.content} ${styles.hidenContent}`}>
            <div className={`${styles.sections} ${styles.hidenSections}`}>
              <span>
                <img src={AtenaLogoImg} alt="" />
              </span>
              <div>
                <Link to="/" replace>
                  Home
                </Link>
                <Link to="/about" replace>
                  Quem Somos
                </Link>
                <Link to="/sports" className={styles.notHiden}>
                  Esportes
                </Link>
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
        </div>
      )}
    </>
  );
}

export default Header;
