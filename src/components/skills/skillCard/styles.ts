import styled from "styled-components";
interface isActivated {
  isActivated: boolean;
}
export const SkillCardContainer = styled.div`
  width: 100%;
  height: 100%;

  max-width: 16rem;
  max-height: 16rem;

  border: 1px solid var(--gray_500);
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h1``;

export const Image = styled.img`
  width: 4.5rem;
  height: 4.5rem;
`;

export const DescriptionListContainer = styled.div`
  width: 100%;
  height: 1rem;

  display:flex;

  align-items: center;
  justify-content: center;

  gap: 1rem;

`;

export const DescriptionList = styled.div<isActivated>`
  width: 20%;
  height: 1rem;

  background-color: ${({ isActivated }) =>
    isActivated ? "#eba417" : "#a8a8b3"};

  border-radius: 8px;
`;
