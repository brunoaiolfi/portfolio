import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: auto;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  gap: 3rem;

  width: 100%;
  height: 100%;

  margin-bottom: -6rem;
`;

export const ContactsContainer = styled.section`
  display: flex;

  flex-direction: column;
  align-items: left;
  justify-content: left;

  width: 50%;
  gap: 1rem;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
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
`;

export const ContactsButtonContainer = styled.section`

  display: flex;
  flex-direction: column;
  gap: 1rem;

`;
