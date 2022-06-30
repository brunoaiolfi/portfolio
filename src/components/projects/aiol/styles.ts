import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 5rem 0 0 0;

 

  @media only screen and (max-width: 600px) {
    /* For phone: */
    padding: 2rem 0 0 0;

    height: auto;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100% - 5rem);

  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 3rem;

  @media only screen and (max-width: 600px) {
    /* For phone: */
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 2rem;

    height: auto;
  }
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

  @media only screen and (max-width: 600px) {
    /* For phone: */
    align-items: center;
    text-align: center;
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
  color: var(--white);

  span {
    color: var(--cyan_500);
  }
`;

export const AIOLLandingPage = styled.img`
  height: 80%;
  width: 100%;

  border-radius: 1rem;
  border: 1px solid var(--white);

  @media only screen and (max-width: 600px) {
    /* For phone: */
    width: 100%;
    height: 25rem;
  }
  
`;
