import React from "react";
// import { Link } from "react-router-dom";
import Header from "../../components/header";
import styles from "./styles.module.scss";

function About() {
  return (
    <div className={styles.home}>
      <Header />
      <h1 className={styles.title}>
        Aqui vai ser a pagina com a nossa historia.
      </h1>
      <h3 className={styles.title}>
        Para voltar basta clicar no botao <strong>"Home"</strong> que também ja
        está funcionando. Experimente clica-lo!
      </h3>
      <h4 className={styles.title}>
        (a imagem no topo será trocada quando você me enviar a q eu te pedi
        ontem. Por enquanto pus essa como exemplo)
      </h4>
    </div>
  );
}

export default About;
