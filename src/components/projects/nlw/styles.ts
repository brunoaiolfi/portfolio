import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  @media only screen and (max-width: 600px) {
    /* For phone: */
    font-size: 2rem;

    height: calc(100vh - 5rem);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
`;

export const MessageContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (max-width: 600px) {
    /* For phone: */
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const EventsTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

export const EventsDescription = styled.h1`
  font-size: 4rem;
  font-weight: bold;

  span {
    color: var(--yellow_500);
  }

  @media only screen and (max-width: 1040px) {
    /* For laptop: */
    font-size: 2rem;
  }
  @media only screen and (max-width: 800px) {
    /* For tablets: */
    font-size: 2rem;
  }

  @media only screen and (max-width: 600px) {
    /* For phone: */
    font-size: 2rem;
  }
`;

export const RepositoryList = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;
  margin-top: 2.5rem;
  @media only screen and (max-width: 600px) {
    /* For phone: */
    flex-direction: column;
  }
`;

export const ScrollDown = styled.div`
  width: 3rem;
  height: 5rem;

  margin-bottom: 2rem;

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
