import React from "react";
import styles from "./styles.module.scss";
// import { Link } from "react-router-dom";
import Header from "../../components/header";

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <h1 className={styles.title}>Aqui vai ser a pagina incial.</h1>
      <h3 className={styles.title}>
        Por enquanto apenas o link de <strong>"Quem somos"</strong> está
        funcionando. Experimente clica-lo
      </h3>
      <h4 className={styles.title}>
        (a imagem no topo será trocada quando você me enviar a q eu te pedi
        ontem. Por enquanto pus essa como exemplo)
      </h4>
    </div>
  );
}

export default Home;
