import React from "react";

import {
  CarouselCard,
  Container,
  ContentWrapper,
  ProjectText,
  ProjectTitle,
  ProjectWrapper as ProjectDescriptionWrapper,
  Title,
  TitleWrapper,
} from "./styles";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export function Aiol() {
  return (
    <Container>
      <ContentWrapper>
        <ProjectDescriptionWrapper>
          <ProjectTitle>AIOL</ProjectTitle>
          <ProjectText>
            Controle de vendas. <br />
            <br />
            <span>
              👉 <a href="https://github.com/brunoaiolfi/AIOL">/AIOL</a> 👈
            </span>
          </ProjectText>
        </ProjectDescriptionWrapper>

        <CarouselCard />
      </ContentWrapper>
    </Container>
  );
}
