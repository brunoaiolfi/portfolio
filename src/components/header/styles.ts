import styled from "styled-components";

interface IsSelected {
  isSelected: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 5rem;

  background-color: var(--gray_900);
  border-bottom: 1px solid var(--gray_600);

  header {
    width: 100%;

    max-width: 1080px;

    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 1.5rem;

      margin-left: 5%;
    }

    article {
      height: 100%;
      display: flex;
      gap: 1rem;
    }

    @media only screen and (max-width: 1040px) {
      /* For laptop: */
      article {
        display: none;
      }
    }

    @media only screen and (max-width: 800px) {
      /* For tablets: */

      article {
        display: none;
      }
    }

    @media only screen and (min-width: 600px) {
      /* For phone: */

      h1 {
        font-size: 1rem;
      }
      article {
        display: none;
      }
    }
  }
`;

export const SectionHeader = styled.a<IsSelected>`
  display: flex;
  align-items: center;

  height: 100%;

  border-bottom: 0px solid var(--yellow_500);
  border-bottom-width: ${({ isSelected }) => (isSelected ? "4px" : 0)};
  border-radius: 8px 8px 0 0;

  padding: 0 0.5rem;

  p {
    font-size: 1rem;
    font-weight: bold;

    color: ${({ isSelected }) => (isSelected ? "#eba417" : "#ffff")};

    transition: all 0.3s;
  }

  :hover {
    p {
      font-size: 1rem;
      font-weight: bold;

      color: var(--yellow_500);
    }
  }
`;
