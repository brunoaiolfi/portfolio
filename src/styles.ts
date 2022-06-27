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
`;

export const BodyContainer = styled.div`
  width: 100%;

  margin-top: 5rem;
  padding: 0 8%;
`;

export const PageContainer = styled.article`
  width: 100%;

  height: calc(100vh - 5rem);
`;
