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

  const skills: SkillCardProps[] = [
    {
      title: "React",
      image: "https://www.w3schools.com/howto/img_avatar.png",
      description: [
        true,
        true,
        false
      ]
    },
    {
      title: "React Native",
      image: "https://www.w3schools.com/howto/img_avatar.png",
      description: [
        true,
        true,
        false,
      ]
    },
    {
      title: "Node",
      image: "https://www.w3schools.com/howto/img_avatar.png",
      description: [
        true,
        false,
        false
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
      image: "https://www.w3schools.com/howto/img_avatar.png",
      description: [
        true,
        false,
        false
      ]
    },
    {
      title: "Figma",
      image: "https://www.w3schools.com/howto/img_avatar.png",
      description: [
        true,
        true,
        true
      ]
    },
  ]
  return (
    <Container>
      <TitleWrapper>
        <Title>My Skills</Title>
      </TitleWrapper>

      <ContentWrapper>
        {
          skills.map(({ description, image, title }, index) =>

            <SkillCardContainer>
              <SkillCard description={description} image={image} title={title} key={index} />
            </SkillCardContainer>

          )
        }
      </ContentWrapper>
    </Container>
  );
}
