import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100% - 5rem);

  padding: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;

  @media only screen and (max-width: 1040px) {
    height: 80%;
  }

  @media only screen and (max-width: 800px) {
    height: 80%;
  }

  @media only screen and (max-width: 600px) {
    /* For phone: */
    height: calc(100vh - 10rem);
    width: 100vw;
  }

`;

export const TitleWrapper = styled.header`
  width: 100%;
  height: auto;
`;

export const Title = styled.h1`
  font-size: 4rem;
  text-align: center;

  @media only screen and (max-width: 1040px) {
    /* For laptop: */
    font-size: 2rem;
  }

  @media only screen and (max-width: 800px) {
    /* For tablets: */
    font-size: 2rem;
  }
`;

export const SkillCardContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;

  border-radius: 0.5rem;
`;
