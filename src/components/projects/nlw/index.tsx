import React from "react";
import {
  Container,
  ContentWrapper,
  RepositoryList,
  MessageContainer,
  EventsDescription,
  ScrollDown,
  EventsTitle,
} from "./styles";

export function Nlw() {
  return (
    <Container>
      <ContentWrapper>
        <MessageContainer>
          <EventsTitle>Eventos</EventsTitle>

          <EventsDescription>
            Veja também os meus projetos <br />
            desenvolvidos durante as <span>NLWs</span>
          </EventsDescription>

          <RepositoryList>
            <p>
              👉 <a href="https://github.com/brunoaiolfi/NLWheat">/NLWheat</a> 👈
            </p>
            <p>
              👉{" "}
              <a href="https://github.com/brunoaiolfi/Plant-Manager">/Plant-Manager </a>{" "}
              👈
            </p>
            <p>
              👉 <a href="https://github.com/brunoaiolfi/Happy  ">/Happy</a> 👈
            </p>
          </RepositoryList>
        </MessageContainer>
      </ContentWrapper>
    </Container>
  );
}
