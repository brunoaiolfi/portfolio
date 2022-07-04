import { useChangeTheme } from "../../hooks/useChangeTheme";
import { ButtonGroup, ChangeThemeButton, Container, ContentWrapper, GithubButton, Name } from "./styles";

// @ts-ignore
import Github from '../../assets/images/github.png';


export function Header() {

  const { theme, handleSetTheme } = useChangeTheme()

  function handleChangeTheme() {
    if (theme === 'dark') {
      handleSetTheme('light')
    } else {
      handleSetTheme('dark')
    }
  }
  return (
    // Header da aplicação
    <Container>

      {/* Wrapper do conteúdo */}
      <ContentWrapper>

        {/* Meu nome como o título da página*/}
        <Name>Bruno Aiolfi</Name>

        {/* Agrupador dos botões do header */}
        <ButtonGroup>
          
          {/* Botão de troca de tema */}
          <ChangeThemeButton onClick={() => handleChangeTheme()}>
            <span>
              {theme}
            </span>
          </ChangeThemeButton>

          {/* Botão do github */}
          <GithubButton href="https://github.com/brunoaiolfi">
            <img src={Github} />
          </GithubButton>

        </ButtonGroup>

      </ContentWrapper>

    </Container>
  );
}
