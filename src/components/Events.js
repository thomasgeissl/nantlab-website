import React from "react";
import styled from "styled-components";
import events from "../data/events.json";
const Container = styled.div`
  margin-top: 64px;
`;

const ListItem = styled.li`
  &::marker {
    content: "▹    ";
  }
  margin-bottom: 4px;
`;

const Upper = styled.div`
  display: flex;
`;
const Title = styled.div`
  margin-right: 4px;
`;
const Venue = styled.div`
  font-size: 0.75em;
  margin-top: auto;
`;
const Type = styled.div`
  font-size: 0.75em;
`;
const Year = styled.div`
  font-size: 0.75em;
`;

export default function Events() {
  return (
    <Container>
      Here are some references from the past:
      <ul>
        {events.map((event) => {
          return (
            <ListItem>
              <Upper>
                <Title>{event.title}</Title>
                <Venue>{event.venue}</Venue>
              </Upper>
              <Type>{event.type}</Type>{" "}
              {event.year && (
                <>
                  , <Year>{event.year}</Year>
                </>
              )}
            </ListItem>
          );
        })}
        <ListItem>...</ListItem>
      </ul>
    </Container>
  );
}
