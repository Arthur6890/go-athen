import React from "react";
import styles from "./styles.module.scss";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

type props = {
  instagramSport: string;
  title: string;
  subtitle: string;
  instagramCaptain: string;
  whatsappCaptain: string;
};
function SportList({
  instagramSport,
  title,
  subtitle,
  instagramCaptain,
  whatsappCaptain,
}: props) {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h2>{title}</h2>

        {instagramSport !== "#" && (
          <a href={instagramSport}>
            <BsInstagram />
          </a>
        )}
      </div>

      <div className={styles.infos}>
        <h4>{subtitle}</h4>
        <div>
          {instagramCaptain !== "#" && (
            <a href={instagramCaptain} target="_blank" rel="noreferrer">
              <BsInstagram />
            </a>
          )}

          {whatsappCaptain !== "#" && (
            <a href={whatsappCaptain} target="_blank" rel="noreferrer">
              <BsWhatsapp />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default SportList;
