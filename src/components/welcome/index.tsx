import React from "react";
import {
  Container,
  ContentWrapper,
  Languages,
  MessageContainer,
  Presentation,
  ScrollDown,
  WellcomeMessage,
} from "./styles";

// ** Por algum motivo ta alegando erro de tipagem
// @ts-ignore
import { ReactComponent as ProgrammerSvg } from "../../assets/svgs/Programmer.svg";

export function Welcome() {
  return (
    <Container>
      <ContentWrapper>
        <MessageContainer>
          <WellcomeMessage>👋 Bem-vindo(a)!</WellcomeMessage>

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

        <ProgrammerSvg />
      </ContentWrapper>
      <ScrollDown>
        <div />
      </ScrollDown>
    </Container>
  );
}
