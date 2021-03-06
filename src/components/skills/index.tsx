import React, { useEffect, useState } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useChangeTheme } from "../../hooks/useChangeTheme";
import { SkillCard, SkillCardProps } from "./skillCard";

//@ts-ignore
import NextDark from "../../assets/images/nextjs-icon-dark.png";
//@ts-ignore
import NextLight from "../../assets/images/nextjs-icon-light.png";
//@ts-ignore
import PrismaDark from "../../assets/images/prismaDark.png";
//@ts-ignore
import PrismaLight from "../../assets/images/prismaLight.png";

import {
  Container,
  ContentWrapper,
  SkillCardContainer,
  Title,
  TitleWrapper,
} from "./styles";


export function Skills() {

  // Constante com as minhas habilidades
  const [skills, setSkills] = useState<SkillCardProps[]>(
    [
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
        image: NextDark,
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
        image: PrismaDark,
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
  )

  const { theme } = useChangeTheme()
  useEffect(() => {
    if (theme === 'light')
      setSkills(
        [
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
            image: NextDark,
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
            image: PrismaDark,
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
      )
    else
      setSkills(
        [
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
            image: NextLight,
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
            image: PrismaLight,
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
      )

  }, [theme])
  return (
    <Container>
      {/* T??tulo */}
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
