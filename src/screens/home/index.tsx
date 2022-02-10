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
        Por enquanto apenas os link de
        <strong>"Quem somos", "Siga-nos" e "Seja um gigante"</strong> estão
        funcionando. Experimente clica-los!
      </h3>
      <h4 className={styles.title}>
        Vc pode ver q tem duas # acima do menu de navegação. Estou em duvida em
        qual das cores colocar. Me da sua opiniao dps de qual achar melhor?
      </h4>
      <h4 className={styles.title}>
        (a imagem no topo será trocada quando você me enviar a q eu te pedi
        ontem, e as imagens que vao ficar alternando a gnt ve se vc faz algumas
        artes, ou se poe foto dos times. Por enquanto pus essas como exemplo)
      </h4>
    </div>
  );
}

export default Home;
