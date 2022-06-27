import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  margin-bottom: -6rem;
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

export const Presentation = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

export const Languages = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  color: var(--gray_500);
  font-weight: 500;
  font-size: 1.25rem;

  p {
    margin-left: 2rem;
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
      top: .75rem;
    }
    to {
      opacity: 0;
      top: 3rem;
    }
  }
`;
