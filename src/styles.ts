import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  overflow-x: hidden;

  @media only screen and (max-width: 1040px) {
    /* For laptop: */
    padding: 0 24px;
  }
  @media only screen and (max-width: 800px) {
    /* For tablets: */
    padding: 0 24px;
  }
`;

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 999;
`;

export const BodyContainer = styled.div`
  width: 100%;

  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageContainer = styled.article`
  width: 100%;
  max-width: 1080px;
  height: calc(100vh - 5rem);
`;

export const FooterWrapper = styled.section`
  width: 100%;
  height: calc(40vh - 5rem);

  margin-top: 5rem;
  border-top: 1px solid var(--gray_600);
  display: flex;
  align-items: center;
  justify-content: center;
`;

