import React from "react";
import {
  Container,
  ContentWrapper,
  HelloHand,
  Languages,
  MessageContainer,
  Presentation,
  ProgrammerSVG,
  ScrollDown,
  WellcomeMessage,
} from "./styles";

// @ts-ignore

export function Welcome() {
  return (
    <Container>
      <ContentWrapper>
        <MessageContainer>
          <HelloHand>👋</HelloHand>
          <WellcomeMessage>
            Bem-vindo(a)!
          </WellcomeMessage>

          <Presentation>
            Sou o Bruno, <br />
            Web &amp; Mobile Dev
          </Presentation>

          <Languages>
            <i>&lt;p&gt;</i>
            <p>
              <i>React &amp; Native developer</i>
            </p>
            <i>&lt;/p&gt;</i>
          </Languages>
        </MessageContainer>

        <ProgrammerSVG />
      </ContentWrapper>

      <ScrollDown>
        <div />
      </ScrollDown>
    </Container>
  );
}
