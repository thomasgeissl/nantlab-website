import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
const Container = styled.div`
  text-align: right;
`;

export default function Footer() {
  return (
    <Container>
      <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />{" "}
      {format(new Date(), "yyyy")} - nantlab
    </Container>
  );
}
