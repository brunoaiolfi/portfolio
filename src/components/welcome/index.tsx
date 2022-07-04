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

export function Welcome() {
  return (


    <Container>

      {/* Container que encapsula o conteúdo de mensagem de boas vindas e também a imagem */}
      <ContentWrapper>

        {/* Mensagem de boas vindas */}
        <MessageContainer>

          {/* Emoji da mão acenando */}
          <HelloHand>👋</HelloHand>

          {/* Mensagem */}
          <WellcomeMessage>
            Bem-vindo(a)!
          </WellcomeMessage>

          {/* Apresentação */}
          <Presentation>
            Sou o Bruno, <br />
            Web &amp; Mobile Dev
          </Presentation>

          {/* Com o que que eu trabalho */}
          <Languages>
            <i>&lt;p&gt;</i>
            <p>
              <i>React &amp; Native developer</i>
            </p>
            <i>&lt;/p&gt;</i>
          </Languages>

        </MessageContainer>

        {/* Imagem do programador*/}
        <ProgrammerSVG />

      </ContentWrapper>

      {/* ScrollDown animado */}
      <ScrollDown>
        <div />
      </ScrollDown>
    </Container>
  );
}
