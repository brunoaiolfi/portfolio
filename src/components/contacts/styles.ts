import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: auto;
  height: 100%;
`;

export const TitleWrapper = styled.section`
  text-align: center;
`;


export const Title = styled.p`
  font-size: 2rem;
  width: auto;

  font-weight: bold;

  @media only screen and (max-width: 1040px) {
    /* For laptop: */
    font-size: 1.75rem;
  }

  @media only screen and (max-width: 800px) {
    /* For tablets: */
    font-size: 1.75rem;
  }
`;

export const Phone = styled.span`
  font-size: 3rem;
  transform-origin: bottom center;

  :hover {
    animation: ring 350ms forwards;
  }

  @keyframes ring {
    0%,
    50%,
    100% {
      transform: rotate(0deg);
    }
    25%,
    75% {
      transform: rotate(5deg);
    }
  }

  @media only screen and (max-width: 1040px) {
    /* For laptop: */
    font-size: 2rem;
  }

  @media only screen and (max-width: 800px) {
    /* For tablets: */
    font-size: 2rem;
  }
`;

export const ContactsButtonContainer = styled.section`
  display: flex;

  margin-top: 1rem;
  gap: 2.5rem;
`;
