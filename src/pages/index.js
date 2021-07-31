import * as React from "react";
import styled from "styled-components";
import "../global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Container = styled.div`
  max-width: 1024px;
  font-size: 24px;
  margin: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const IndexPage = () => {
  return (
    <Container>
      <Header></Header>
      <Content>
        <p>
          Hello, we are nantlab, an interdisciplinary collective. We create
          immersive, interactive experiences by fusing the analog and digital
          world. We design and develop engaging, interactive installations since
          2014.
        </p>
        <p>... more to come soon</p>
      </Content>
      <Footer></Footer>
    </Container>
  );
};

export default IndexPage;
