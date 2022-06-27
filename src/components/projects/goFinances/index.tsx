import React from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

// @ts-ignore
import Resume from '../../../assets/images/resume.jpeg';
// @ts-ignore
import Dashboard from '../../../assets/images/dashboard.jpeg';
// @ts-ignore
import Register from '../../../assets/images/register.jpeg';

import {
  Carousel,
  CarouselCard,
  CarouselContainer,
  Container,
  ContentWrapper,
  ProjectText,
  ProjectTitle,
  ProjectWrapper as ProjectDescriptionWrapper,
  SwipeDescriptionContainer,
  Title,
  TitleWrapper,
} from "./styles";


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

        <CarouselContainer>

          <Carousel>
            <SwiperSlide>
              <CarouselCard src={Resume} />
            </SwiperSlide>

            <SwiperSlide>
              <CarouselCard src={Register} />
            </SwiperSlide>

            <SwiperSlide>
              <CarouselCard src={Dashboard} />
            </SwiperSlide>
          </Carousel>

          <SwipeDescriptionContainer>
            <span> 👆 </span>
            <h1>
              Passe para o lado<br />
              para ver todas as telas!
            </h1>
          </SwipeDescriptionContainer>
        </CarouselContainer>
      </ContentWrapper>
    </Container>
  );
}
