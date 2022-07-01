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
`;

export const Name = styled.h1`
  h1 {
    font-size: 1.5rem;

    margin-left: 5%;
  }
`;

export const ContentWrapper = styled.header`
  height: 100%;
  width: 100%;
  max-width: 1080px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;

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

  @media only screen and (max-width: 600px) {
    /* For phone: */

    h1 {
      font-size: 1rem;
    }
    article {
      display: none;
    }
  }
`;

export const ButtonGroup = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ChangeThemeButton = styled.button`
  width: 2rem;
  height: 2rem;

  border: 1px solid var(--white);
  border-radius: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  text-transform: uppercase;

  outline: none;
  overflow: hidden;
  position: relative;

  background-color: var(--gray_900);
  padding: 17px 60px;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  span {
    font-size: 1rem;
    font-weight: bold;
    color: var(--gray_100);

    position: relative;
    z-index: 999999999;

    transition: all 0.5s ease-in-out;
  }

  :after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 490%;
    width: 140%;
    background: var(--gray_100);
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
  }

  :hover {
    span {
      color: var(--gray_900);
    }
  }

  :hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }
`;
