import React from "react";
import { Carrer } from "./components/carrer";
import { Header } from "./components/header";
import { Aiol } from "./components/projects/aiol";
import { GoFinances } from "./components/projects/goFinances";
import { Nlw } from "./components/projects/nlw";
import { Skills } from "./components/skills";
import { Welcome } from "./components/welcome";
import { GlobalStyle } from "./global/styles/global";
import "./global/styles/global.ts";
import {
  BodyContainer,
  Container,
  HeaderContainer,
  PageContainer,
} from "./styles";

function App() {
  return (
    <Container>
      <GlobalStyle />

      <HeaderContainer>
        <Header pageOnView="welcome" />
      </HeaderContainer>

      <BodyContainer>

        <PageContainer>
          <Welcome />
        </PageContainer>

        <PageContainer>
          <GoFinances />
        </PageContainer>

        <PageContainer>
          <Aiol />
        </PageContainer>
        
        <PageContainer>
          <Nlw />
        </PageContainer>
        
        <PageContainer>
          <Skills />
        </PageContainer>
      
        <PageContainer>
          <Carrer />
        </PageContainer>

      </BodyContainer>
      
    </Container>  
  );
}

export default App;
