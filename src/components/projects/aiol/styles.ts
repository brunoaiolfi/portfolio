import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 5rem 0 0 0;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100% - 5rem);

  display: flex;

  align-items: center;
  justify-content: space-between  ;

  gap: 3rem;
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

export const CarouselCard = styled.img`
  height: 100%;
  width: 75%;

  border: 1px solid red;
  border-radius: 1rem;
`;
