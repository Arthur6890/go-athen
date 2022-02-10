import React from "react";
import { sports } from "./sports";
import Header from "../../components/header";
import SportList from "../../components/sportList";
import styles from "./styles.module.scss";

function Sports() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.title}>
        <h1>Tem interesse em nossas modalidades?</h1>
        <h2>Contacte um capitão agora!</h2>
      </div>
      <div className={styles.content}>
        {sports.map((item) => {
          return (
            <div>
              <SportList
                title={item.title}
                subtitle={item.subtitle}
                instagramCaptain={item.instagramCaptain}
                instagramSport={item.instagramSport}
                whatsappCaptain={item.whatsappCaptain}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sports;
