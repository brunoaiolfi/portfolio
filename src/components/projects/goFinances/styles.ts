import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100% - 5rem);

  display: flex;

  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;

  @media only screen and (max-width: 1040px) {
    /* For laptop: */
    height: calc(100% - 15rem);
  }

  @media only screen and (max-width: 800px) {
    /* For tablets: */
    height: calc(100% - 15rem);
  }

  @media only screen and (max-width: 600px) {
    /* For phone: */
    height: auto;

    display: flex;

    flex-direction: column;
    align-items: center;

    gap: 2rem;
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
    font-size: 3rem;
  }

  @media only screen and (max-width: 800px) {
    /* For tablets: */
    font-size: 3rem;
  }
  @media only screen and (max-width: 600px) {
    /* For phone: */
    font-size: 2rem;
  }
`;

export const ProjectWrapper = styled.section`
  width: auto;

  display: flex;
  flex-direction: column;

  gap: 1.75rem;

  @media only screen and (max-width: 600px) {
    /* For phone: */
    align-items: center;
    text-align: center;

    margin-top: 1rem;
    gap: 1rem;
  }
`;

export const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--yellow_500);

  @media only screen and (max-width: 600px) {
    /* For phone: */
    font-size: 2rem;
  }
`;

export const ProjectText = styled.h1`
  font-size: 1rem;
  color: var(--gray_100);

  span {
    color: var(--cyan_500);
  }
`;

export const CarouselContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;
`;

export const Carousel = styled(Swiper)`
  height: 100%;
  max-height: 30rem;
  width: 18rem;

  margin-right: -2rem;

  @media only screen and (max-width: 1040px) {
    /* For laptop: */
    max-height: 25rem;
  }

  @media only screen and (max-width: 800px) {
    /* For tablets: */
    max-height: 25rem;
  }

  @media only screen and (max-width: 800px) {
    /* For tablets: */
    margin-right: -7rem;
  }

  
`;

export const CarouselCard = styled.img`
  height: 100%;
  max-height: 30rem;

  width: auto;

  margin-right: 3rem;
  border-radius: 1rem;

  @media only screen and (max-width: 1040px) {
    /* For laptop: */
    max-height: 25rem;
  }

  @media only screen and (max-width: 800px) {
    /* For tablets: */
    max-height: 20rem;
  }

`;

export const SwipeDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  justify-content: center;
  align-items: center;

  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: var(--gray_100);

  span {
    font-size: 1.5rem;
    transform-origin: bottom center;
    animation: swipe 1.8s ease-in-out 0s infinite;
  }

  @keyframes swipe {
    0%,
    100% {
      transform: rotate(0.05turn);
    }
    50% {
      transform: rotate(-0.05turn);
    }
  }

  @media only screen and (max-width: 600px) {
    /* For phone: */
    font-size: 1rem;

    h1 {
      font-size: 1rem;

    }
  }
`;
export const SwipeText = styled.h1``;
