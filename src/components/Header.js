import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import InstagramIcon from "@material-ui/icons/Instagram";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
  margin-bottom: 50px;
`;
const Title = styled.h1`
  text-transform: uppercase;
  margin: 0;
`;
const SubTitle = styled.div``;
const Logo = styled.div`
  flex-grow: 1;
`;
const SocialMedia = styled.div``;

export default function Header() {
  return (
    <Container>
      <Helmet title="nantlab" defer={false} />
      <Logo>
        <Title>nantlab</Title>
        <SubTitle>interactive installations</SubTitle>
      </Logo>
      <SocialMedia>
        <a
          href="https://instagram.com/nantlab"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon></InstagramIcon>
        </a>
      </SocialMedia>
    </Container>
  );
}
