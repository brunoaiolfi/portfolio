import React from "react";
import {
  Container,
  ContentWrapper,
  EmojiWithAnimation,
  Time,
  CareerDescriptionContainer,
  Ocuppation,
  ScrollDown,
  Location,
  EmojiWithoutAnimation,
} from "./styles";


export function Career() {
  return (
    <Container>
      <ContentWrapper>
        <CareerDescriptionContainer>
          <EmojiWithoutAnimation>🚩</EmojiWithoutAnimation>
          <Location>
            Bairro da juventude - CEP
          </Location>

          <Ocuppation>
            Curso técnico
          </Ocuppation>

          <Time>
            <p>
              <i>2018. </i>
            </p>
          </Time>
        </CareerDescriptionContainer>

        <CareerDescriptionContainer>
          <EmojiWithoutAnimation>🏫</EmojiWithoutAnimation>
          <Location>
            CEDUP
          </Location>

          <Ocuppation>
            Curso técnico
          </Ocuppation>

          <Time>
            <p>
              <i>2019 - 2021. </i>
            </p>
          </Time>
        </CareerDescriptionContainer>

      </ContentWrapper>

      <ContentWrapper>

        <CareerDescriptionContainer>
          <EmojiWithoutAnimation>🏫</EmojiWithoutAnimation>
          <Location>
            Rocketseat
          </Location>

          <Ocuppation>
            Curso de React <br />
            &amp; React-native
          </Ocuppation>

          <Time>
            <p>
              <i>2021 - Hoje </i>
            </p>
          </Time>
        </CareerDescriptionContainer>

        <CareerDescriptionContainer>
          <EmojiWithAnimation>🚀</EmojiWithAnimation>
          <Location>
            AGPR5
          </Location>

          <Ocuppation>
            Dev. front-end <br />
            &amp; mobile
          </Ocuppation>

          <Time>
            <p>
              <i>Nov. 2021 - Hoje </i>
            </p>
          </Time>
        </CareerDescriptionContainer>

      </ContentWrapper>

    </Container>
  );
}
