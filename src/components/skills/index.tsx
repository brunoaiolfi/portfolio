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
      title: "React",
      image: "https://www.w3schools.com/howto/img_avatar.png",
      description: [
        true,
        true,
        false,
      ]
    },
    {
      title: "React",
      image: "https://www.w3schools.com/howto/img_avatar.png",
      description: [
        true,
        false,
        true
      ]
    },
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
      title: "React",
      image: "https://www.w3schools.com/howto/img_avatar.png",
      description: [
        true,
        true,
        false
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
