import React from "react";
import styles from "./styles.module.scss";
import Header from "../../components/header";
import Banner from "../../assets/images/banner.png";

function Home() {
  return (
    <>
      <Header hide />
      <img src={Banner} alt="a3" className={styles.image} />

      <section className={styles.aboutUs}>
        <h1 className={styles.title}>tetet</h1>
        <h1 className={styles.title}>tetet</h1>
        <h1 className={styles.title}>tetet</h1>
        <h1 className={styles.title}>tetet</h1>
        <h1 className={styles.title}>tetet</h1>
        <h1 className={styles.title}>tetet</h1>
        <h1 className={styles.title}>tetet</h1>
        <h1 className={styles.title}>tetet</h1>
        <h1 className={styles.title}>tetet</h1>
        <h1 className={styles.title}>tetet</h1>
        <h1 className={styles.title}>tetet</h1>
        <h1 className={styles.title}>tetet</h1>
        <h1 className={styles.title}>tetet</h1>
      </section>
    </>
  );
}

export default Home;
