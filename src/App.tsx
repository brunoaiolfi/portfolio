import React, { useEffect, useRef, useState } from "react";
import { scroller } from "react-scroll";
import { ThemeProvider } from "styled-components";
import { Career } from "./components/career";
import { Contacts } from "./components/contacts";
import { Header } from "./components/header";
import { Aiol } from "./components/projects/aiol";
import { GoFinances } from "./components/projects/goFinances";
import { Nlw } from "./components/projects/nlw";
import { Skills } from "./components/skills";
import { Welcome } from "./components/welcome";
import { ChangeThemeProvider } from "./contexts/changeTheme";
import { GlobalStyle } from "./global/styles/global";
import "./global/styles/global.ts";
import dark from "./global/styles/themes/dark";
import light from "./global/styles/themes/light";
import { useChangeTheme } from "./hooks/useChangeTheme";
import {
  BodyContainer,
  Container,
  FooterWrapper,
  HeaderContainer,
  PageContainer,
} from "./styles";

function App() {

  const { theme } = useChangeTheme()

  return (
    <ChangeThemeProvider>
      <ThemeProvider theme={theme === 'light' ? light : dark} >

        <GlobalStyle />

        <Container  >
          <HeaderContainer >
            <Header />
          </HeaderContainer>

          <BodyContainer >

            <PageContainer id="welcome">
              <Welcome />
            </PageContainer>


            <PageContainer id="goFinances">
              <GoFinances />
            </PageContainer>

            <PageContainer id="aiol">
              <Aiol />
            </PageContainer>

            <PageContainer id="nlw">
              <Nlw />
            </PageContainer>

            <PageContainer id="skills">
              <Skills />
            </PageContainer>

            <PageContainer id="career">
              <Career />
            </PageContainer>


          </BodyContainer>

          <FooterWrapper id="contacts">
            <Contacts />
          </FooterWrapper>

        </Container>

      </ThemeProvider>
    </ChangeThemeProvider>
  );
}

export default App;
