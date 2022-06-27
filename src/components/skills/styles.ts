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
`;

export const TitleWrapper = styled.header`
  width: 100%;
  height: 5rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

export const SkillCardContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;

  border-radius: 0.5rem;
`;


