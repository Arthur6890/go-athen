import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Header from "../../components/header";

function Home() {
  return (
    <>
      <Header />
      <h1 className={styles.home}>
        sim aqui é a home
        <Link to="about" className={styles.teste}>
          aboute nego
        </Link>
      </h1>
    </>
  );
}

export default Home;
