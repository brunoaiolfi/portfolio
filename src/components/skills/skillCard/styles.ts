import styled from "styled-components";
interface isActivated {
  isActivated: boolean;
}
export const SkillCardContainer = styled.div`
  width: 100%;
  height: 100%;

  border: 1px solid var(--gray_500);

  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;
`;

export const Header = styled.header`

  width: 100%;


`;


export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;

  @media only screen and (max-width: 600px) {
    /* For phone: */
    font-size: 1rem;
  }
`;

export const ToolTipButton = styled.div`
  position: relative;

  top: 10;
  right: 10;
  z-index: 999;
  border-radius: 100%;
  background: var(--gray_600);

  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;

    color: var(--gray_100);
  }

`;

export const Image = styled.img`
  width: 4.5rem;
  height: 4.5rem;

  @media only screen and (max-width: 1040px) {
    /* For laptop: */
    width: 3rem;
    height: 3rem;
  }

  @media only screen and (max-width: 800px) {
    /* For tablets: */
    width: 3rem;
    height: 3rem;
  }
`;

export const HabilityLevel = styled.div`
  width: 100%;
  height: auto;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 1rem;

  @media only screen and (max-width: 600px) {
    /* For phone: */
    align-items: center;
    justify-content: space-around;
    gap: 0;
  }
`;

export const DescriptionList = styled.div<isActivated>`
  width: 20%;
  height: 1rem;

  background-color: ${({ isActivated }) =>
    isActivated ? "#eba417" : "#a8a8b3"};

  border-radius: 8px;

  @media only screen and (max-width: 1040px) {
    /* For laptop: */
    height: 0.75rem;
  }

  @media only screen and (max-width: 800px) {
    /* For tablets: */
    height: 0.75rem;
  }

  @media only screen and (max-width: 600px) {
    width: 25%;
    height: 1rem;

    background-color: ${({ isActivated }) =>
      isActivated ? "#eba417" : "#a8a8b3"};

    border-radius: 6px;
  }
`;
