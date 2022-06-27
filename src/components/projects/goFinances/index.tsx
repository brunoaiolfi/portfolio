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

export function GoFinances() {
  return (
    <Container>
      <TitleWrapper>
        <Title>Meus projetos &amp; participações</Title>
      </TitleWrapper>

      <ContentWrapper>
        <ProjectDescriptionWrapper>
          <ProjectTitle>goFinances</ProjectTitle>
          <ProjectText>
            Controle suas finanças na <br />
            <b>palma da sua mão.</b> <br />
            <br />
            <span>
              👉{" "}
              <a href="https://github.com/brunoaiolfi/goFinances">
                /goFinances
              </a>{" "}
              👈
            </span>
          </ProjectText>
        </ProjectDescriptionWrapper>

        <Swiper>
          <SwiperSlide>
            <CarouselCard />
          </SwiperSlide>

          <SwiperSlide>
            <CarouselCard />
          </SwiperSlide>

          <SwiperSlide>
            <CarouselCard />
          </SwiperSlide>
        </Swiper>
      </ContentWrapper>
    </Container>
  );
}
