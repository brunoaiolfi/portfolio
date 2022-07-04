import React from "react";
import { ProjectCard, ProjectCardProps } from "../../projectCard";
import {
  Container,
  ContentWrapper,
  RepositoryList,
  MessageContainer,
  EventsDescription,
  ScrollDown,
  EventsTitle,
} from "./styles";

export function Nlw() {
  const NLWS: ProjectCardProps[] = [
    {
      colorBackground: "#37b93d",
      description: "Um aplicativo para te ajudar a cuidar melhor de suas plantas.",
      name: "PlantManager 🌱",
      repositoryLink: "http://nlws.nl",
    },
    {
      colorBackground: "#30c4d8",
      description: "Um site que ajuda a encontrar orfanatos na sua região e a agendar visitas. Traga alegria para a vida de inúmeras crianças, visite orfanatos.",
      name: "Happy",
      repositoryLink: "http://nlws.nl",
    },
  ]
  return (
    <Container>

      <ContentWrapper>

        <MessageContainer>
          {/* Título */}
          <EventsTitle>Eventos</EventsTitle>

          {/* Descrição dos eventos */}
          <EventsDescription>
            Veja também os meus projetos
            desenvolvidos durante as <span>NLWs</span>
          </EventsDescription>

          {/* Lista dos repositórios */}
          <RepositoryList>
            {
              NLWS.map((project, index) => (
                <ProjectCard
                  key={index}
                  colorBackground={project.colorBackground}
                  description={project.description}
                  name={project.name}
                  repositoryLink={project.repositoryLink}
                />
              ))
            }
          </RepositoryList>

        </MessageContainer>

      </ContentWrapper>
    </Container>
  );
}
