import React from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { SkillCard, SkillCardProps } from "./skillCard";


import {
  Container,
  ContentWrapper,
  SkillCardContainer,
  Title,
  TitleWrapper,
} from "./styles";


export function Skills() {

  // Constante com as minhas habilidades
  const skills: SkillCardProps[] = [
    {
      title: "React",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: [
        true,
        true,
        false
      ]
    },
    {
      title: "React Native",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: [
        true,
        true,
        false,
      ]
    },
    {
      title: "Next",
      image: "https://www.w3schools.com/howto/img_avatar.png",
      description: [
        true,
        false,
        false
      ]
    },
    {
      title: "Node",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      description: [
        true,
        false,
        false
      ]
    },
    {
      title: "Prisma",
      image: "https://www.w3schools.com/howto/img_avatar.png",
      description: [
        true,
        false,
        false
      ]
    },
    {
      title: "MySql",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      description: [
        true,
        false,
        false
      ]
    },
    {
      title: "Figma",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      description: [
        true,
        true,
        true
      ]
    },
  ]

  return (
    <Container>
      {/* Título */}
      <TitleWrapper>
        <Title>My Skills</Title>
      </TitleWrapper>

      {/* Lista de habilidades */}
      <ContentWrapper>
        {
          skills.map(({ description, image, title }, index) =>

            <SkillCardContainer>
              {/* Componente de card de habilidade */}
              <SkillCard description={description} image={image} title={title} key={index} />
            </SkillCardContainer>

          )
        }
      </ContentWrapper>
    </Container>
  );
}
