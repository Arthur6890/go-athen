import React from "react";
import { GoMegaphone } from "react-icons/go";
import Header from "../../components/header";
import styles from "./styles.module.scss";

function About() {
  const subscribe = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdLHowQOZFoNzgxAib62kSQozGBP4Y6hbqiwJZJ-XwkznNxSQ/viewform"
    );
  };
  return (
    <>
      <div className={styles.home}>
        <Header />
        <h1 className={styles.title}>
          Aqui vai ser a pagina com a nossa historia.
        </h1>
        <h3 className={styles.title}>
          Para navegar entre as telas basta escolher um dos botões citados na{" "}
          <strong>"Home"</strong>. Experimente clicar em algum!
        </h3>
        <h4 className={styles.title}>
          O fundo atás das "#" será uma imagem que eu pedi pra nossa querida
          vice-presidente Flavinha e a área da "#" fará um efeito de vidro fosco
          sobre a imagem, por enquanto pus uma cor sólida como exemplo. As
          imagens que vao ficar alternando a gnt ve se vc faz algumas artes, ou
          se poe foto dos times, por enquanto pus essas como exemplo também.
        </h4>
      </div>
      <div className={styles.mainDiv}>
        <GoMegaphone></GoMegaphone>
        <span>Olá!</span>
        <h1>Somos a Atena</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h4>
        <h4>
          Convallis tellus id interdum velit laoreet. Sagittis vitae et leo duis
          ut diam. Hendrerit gravida rutrum quisque non tellus. Tristique
          senectus et netus et malesuada fames ac turpis egestas. Bibendum est
          ultricies integer quis auctor elit sed. At quis risus sed vulputate
          odio ut enim blandit volutpat. Sed felis eget velit aliquet sagittis
          id consectetur. Orci ac auctor augue mauris augue neque gravida. Id
          ornare arcu odio ut sem. Feugiat in ante metus dictum at tempor.
          Tortor posuere ac ut consequat semper viverra. Facilisi nullam
          vehicula ipsum a arcu cursus vitae. Ultricies integer quis auctor elit
          sed vulputate mi sit amet. Vestibulum rhoncus est pellentesque elit
          ullamcorper dignissim cras tincidunt. Quam adipiscing vitae proin
          sagittis nisl. Facilisi morbi tempus iaculis urna id volutpat lacus
          laoreet non.
        </h4>
        <h4>
          Congue quisque egestas diam in arcu cursus euismod quis. Lacus vel
          facilisis volutpat est. Aliquam vestibulum morbi blandit cursus risus
          at ultrices. Scelerisque felis imperdiet proin fermentum leo vel.
          Tellus orci ac auctor augue mauris augue neque gravida. Scelerisque
          varius morbi enim nunc. Dapibus ultrices in iaculis nunc sed augue.
          Nunc mattis enim ut tellus elementum sagittis vitae et leo. Accumsan
          sit amet nulla facilisi morbi tempus iaculis urna id. Posuere lorem
          ipsum dolor sit. Id venenatis a condimentum vitae sapien pellentesque
          habitant morbi tristique. Nulla facilisi cras fermentum odio eu
          feugiat.
        </h4>

        <button className={styles.buttonCustom} onClick={subscribe}>
          <span>Quero fazer parte!</span>
        </button>
      </div>
    </>
  );
}

export default About;
