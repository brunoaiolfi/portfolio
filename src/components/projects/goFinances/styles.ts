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

  gap: 2rem;
`;

export const TitleWrapper = styled.header`
  width: 100%;
  height: 5rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

export const ProjectWrapper = styled.section`
  width: auto;
  display: flex;
  flex-direction: column;

  gap: 1.75rem;
`;

export const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--yellow_500);
`;

export const ProjectText = styled.h1`
  font-size: 1rem;
  color: var(--white);

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

`;

export const CarouselCard = styled.img`
  height: 100%;
  width: 15rem;

  margin-right: 3rem;
  margin-top: 1rem;
  border-radius: 1rem;
`;

export const SwipeDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  justify-content: center;
  align-items: center;

  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: var(--white);

  span {
    font-size: 2.5rem;
    transform-origin: bottom center;
    animation: hello 1.8s ease-in-out 0s infinite;
  }

  @keyframes hello {
    0%,
    100% {
      transform: rotate(0.05turn);
    }
    50% {
      transform: rotate(-0.05turn);
    }
  }
`;
export const SwipeText = styled.h1``;
