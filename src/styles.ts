import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  overflow-x: hidden;
`;

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 999;

  @media only screen and (max-width: 600px) {
    /* For phone: */
    display: none;
  }
`;

export const BodyContainer = styled.div`
  width: 100%;

  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1040px) {
    /* For laptop: */
    padding: 0 24px;
  }
  @media only screen and (max-width: 800px) {
    /* For tablets: */
    padding: 0 24px;
  }
  @media only screen and (max-width: 600px) {
    /* For phone: */
    padding: 0 24px;
  }
`;

export const PageContainer = styled.article`
  width: 100%;
  max-width: 1080px;
  height: calc(100vh - 5rem);

  padding: 1rem 0;
  scroll-behavior: smooth;

  @media only screen and (max-width: 600px) {
    /* For phone: */
    height: auto;
    min-height: 100vh;
  }
`;

export const FooterWrapper = styled.section`
  width: 100%;
  height: 30vh;

  margin-top: 5rem;
  border-top: 1px solid var(--gray_600);

  display: flex;
  align-items: center;
  justify-content: center;
`;
