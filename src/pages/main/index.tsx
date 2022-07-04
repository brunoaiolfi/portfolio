import { ThemeProvider } from "styled-components";
import { Career } from "../../components/career";
import { Contacts } from "../../components/contacts";
import { Header } from "../../components/header";
import { GoFinances } from "../../components/projects/goFinances";
import { Nlw } from "../../components/projects/nlw";
import { Skills } from "../../components/skills";
import { Welcome } from "../../components/welcome";
import { GlobalStyle } from "../../global/styles/global";
import dark from "../../global/styles/themes/dark";
import light from "../../global/styles/themes/light";
import { useChangeTheme } from "../../hooks/useChangeTheme";
import { Container, HeaderContainer, BodyContainer, PageContainer, FooterWrapper } from "./styles";

export function MainPage() {

    const { theme } = useChangeTheme()

    return (

        // Definição do tema em uso
        <ThemeProvider theme={theme === 'light' ? light : dark}>

            {/* Estilos globais */}
            <GlobalStyle />

            {/* 
            As configurações acima, normalmente ficam dentro de um componente de layout, porém  
            commo não havia a necessidade de criar tal componente e não é possível para o app identificar a mudança 
            no estado do contexto, eu deixei esta parte aqui.
            */}
            
            {/* Página em si */}
            <Container   >
                {/* Header */}
                <HeaderContainer >
                    <Header />
                </HeaderContainer>

                {/* Body */}
                {/* Aqui é listado todas as páginas */}
                <BodyContainer >

                    {/* Página inicial */}
                    <PageContainer >
                        <Welcome />
                    </PageContainer>

                    {/* Página que apresenta o projeto do goFinances */}
                    <PageContainer >
                        <GoFinances />
                    </PageContainer>

                    {/* Página que apresenta as minhas participações nas nlw */}
                    <PageContainer >
                        <Nlw />
                    </PageContainer>

                    {/* Página que apresenta as minhas habilidades */}
                    <PageContainer >
                        <Skills />
                    </PageContainer>

                    {/* Página que apresenta a minha carreira como programador */}
                    <PageContainer >
                        <Career />
                    </PageContainer>

                </BodyContainer>

                {/* Footer de contatos */}
                <FooterWrapper >
                    <Contacts />
                </FooterWrapper>

            </Container>
        </ThemeProvider>
    )
}