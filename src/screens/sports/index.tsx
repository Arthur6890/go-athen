import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/header";
import SportList from "../../components/sportList";
import styles from "./styles.module.scss";

function Sports() {
  return (
    <div className={styles.main}>
      <Header />
      <Container className={styles.content} fluid>
        <Row className={styles.row}>
          <Col>
            <SportList title="Futebol" subtitle="Arthur Ramos" />
          </Col>
          <Col>
            <SportList title="Futebol" subtitle="Arthur Ramos" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sports;
