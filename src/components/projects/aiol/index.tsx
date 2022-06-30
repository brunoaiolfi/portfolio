import React from "react";

import {
  AIOLLandingPage,
  Container,
  ContentWrapper,
  ProjectText,
  ProjectTitle,
  ProjectWrapper as ProjectDescriptionWrapper,
} from "./styles";

import "swiper/css";


export function Aiol() {
  return (
    <Container>
      <ContentWrapper>
        <ProjectDescriptionWrapper>
          <ProjectTitle>AIOL</ProjectTitle>
          <ProjectText>
            Controle de vendas e estoque. <br />
            <br />
            <span>
              👉 <a href="https://github.com/brunoaiolfi/AIOL">/AIOL</a> 👈
            </span>
          </ProjectText>
        </ProjectDescriptionWrapper>

        <AIOLLandingPage />
      </ContentWrapper>
    </Container>
  );
}
