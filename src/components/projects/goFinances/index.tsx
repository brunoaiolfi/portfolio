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
  ProjectDescription,
  ProjectTitle,
  ProjectWrapper as ProjectDescriptionWrapper,
  SwipeDescriptionContainer,
  Title,
  TitleWrapper,
} from "./styles";


export function GoFinances() {
  const Images = [
    {
      imageUrl: Resume,
    },
    {
      imageUrl: Register,
    },
    {
      imageUrl: Dashboard,
    },

  ]

  return (
    <Container>

      {/* Título */}
      <TitleWrapper>
        <Title>Meus projetos &amp; participações</Title>
      </TitleWrapper>

      {/* Container do conteúdo */}
      <ContentWrapper>

        {/* Container da descrição do projeto */}
        <ProjectDescriptionWrapper>

          {/* Título do projeto */}
          <ProjectTitle>goFinances</ProjectTitle>

          {/* Descrição do projeto */}
          <ProjectDescription>
            Controle suas finanças na <br />
            <b>palma da sua mão.</b> <br />
            <br />

            {/* Link para o repositório */}
            <span>
              👉{" "}
              <a href="https://github.com/brunoaiolfi/goFinances">
                /goFinances
              </a>{" "}
              👈
            </span>
          </ProjectDescription>
        </ProjectDescriptionWrapper>

        {/* Container do Carousel das imagens do projeto */}
        <CarouselContainer>

          {/* Carousel */}
          <Carousel>
            {/*  */}

            {
              // Map das imagens
              Images.map((image, index) => (

                <SwiperSlide key={index}>
                  <CarouselCard src={image.imageUrl} />
                </SwiperSlide>
              ))
            }

          </Carousel>

          {/* Descrição da ação do carousel */}
          <SwipeDescriptionContainer>
            {/* Emoji de indicação de ação */}
            <span> 👆 </span>

            {/* Descrição da ação */}
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
