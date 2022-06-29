import React from "react";
import {
  Container,
  ContentWrapper,
  Rocket,
  Languages,
  CareerDescriptionContainer,
  WorkDescription,
  ScrollDown,
  Industry,
  Flag,
} from "./styles";


export function Career() {
  return (
    <Container>
      <ContentWrapper>
        <CareerDescriptionContainer>
          <Flag>🚩</Flag>
          <Industry>
            Bairro da juventude - CEP
          </Industry>

          <WorkDescription>
            Curso técnico
          </WorkDescription>

          <Languages>
            <p>
              <i>2018. </i>
            </p>
          </Languages>
        </CareerDescriptionContainer>
        <CareerDescriptionContainer>
          <Flag>🏫</Flag>
          <Industry>
            CEDUP
          </Industry>

          <WorkDescription>
            Curso técnico
          </WorkDescription>

          <Languages>
            <p>
              <i>2019 - 2021. </i>
            </p>
          </Languages>
        </CareerDescriptionContainer>
      </ContentWrapper>
      <ContentWrapper>
        <CareerDescriptionContainer>
          <Flag>🏫</Flag>
          <Industry>
            Rocketseat
          </Industry>

          <WorkDescription>
            Curso de React <br />
            &amp; React-native
          </WorkDescription>

          <Languages>
            <p>
              <i>2021 - Hoje </i>
            </p>
          </Languages>
        </CareerDescriptionContainer>
        <CareerDescriptionContainer>
          <Rocket>🚀</Rocket>
          <Industry>
            AGPR5
          </Industry>

          <WorkDescription>
            Dev. front-end <br />
            &amp; mobile
          </WorkDescription>

          <Languages>
            <p>
              <i>Nov. 2021 - Hoje </i>
            </p>
          </Languages>
        </CareerDescriptionContainer>
      </ContentWrapper>

    </Container>
  );
}
