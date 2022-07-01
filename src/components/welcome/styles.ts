import styled from "styled-components";
//  @ts-ignore
import { ReactComponent as ProgrammerSvg } from "../../assets/svgs/Programmer.svg";

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: calc(100vh - 15rem);

`;

export const MessageContainer = styled.section`
  display: flex;

  flex-direction: column;

  gap: 1rem;
`;

export const WellcomeMessage = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

export const HelloHand = styled.span`
  width: 3rem;
  font-size: 3rem;
  transform-origin: bottom right;
  animation: hello 1.8s ease-in-out 0s infinite;

  @keyframes hello {
    0%,
    100% {
      transform: rotate(-0.01turn);
    }
    50% {
      transform: rotate(0.01turn);
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
export const Presentation = styled.h1`
  font-size: 4rem;
  font-weight: bold;

  @media only screen and (max-width: 1040px) {
    /* For laptop: */
    font-size: 2rem;
  }
  @media only screen and (max-width: 800px) {
    /* For tablets: */
    font-size: 2rem;
  }
`;

export const ProgrammerSVG = styled(ProgrammerSvg)`
  width: 35%;

  @media only screen and (max-width: 600px) {
    /* For phone: */
    display: none
  }
`;

export const Languages = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  color: var(--gray_500);
  font-weight: 600;
  font-size: 1.25rem;

  p {
    margin-left: 2rem;
  }
`;

export const ScrollDown = styled.div`
  width: 3rem;
  height: 5rem;

  position: relative;
  bottom: 0;

  border: 3px solid var(--white);
  border-radius: 2rem;

  div {
    width: 1rem;
    height: 1rem;

    border-radius: 100%;

    background-color: var(--white);

    position: relative;
    z-index: 0;
    left: 30%;
    top: 1rem;

    animation: drop 1.5s ease-in-out infinite;
  }

  @keyframes drop {
    from {
      opacity: 1;
      top: 0.75rem;
    }
    to {
      opacity: 0;
      top: 3rem;
    }
  }
`;
