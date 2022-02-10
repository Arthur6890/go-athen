import React from "react";
import styles from "./styles.module.scss";
import Header from "../../components/header";
import Slider from "../../components/carrousel";

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Slider />
      <h1 className={styles.title}>Aqui vai ser a pagina incial.</h1>
      <h3 className={styles.title}>
        Todos os links do menu (
        <strong>
          "Home", "Quem somos", "Esportes", "Siga-nos" e "Seja um gigante"
        </strong>
        ) estão funcionando. Experimente clica-los!
      </h3>
      <h4 className={`${styles.title} ${styles.last}`}>
        As imagens que vao ficar alternando a gnt ve se vc faz algumas artes, ou
        se poe foto dos times, por enquanto pus essas como exemplo também.
      </h4>
    </div>
  );
}

export default Home;
