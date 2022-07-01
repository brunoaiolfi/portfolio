import { useChangeTheme } from "../../hooks/useChangeTheme";
import { ButtonGroup, ChangeThemeButton, Container, ContentWrapper, Name } from "./styles";

export function Header() {

  const { theme, setTheme } = useChangeTheme()

  function handleChangeTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <Container>

      <ContentWrapper>
        <Name>Bruno Aiolfi</Name>

        <ButtonGroup>
          <ChangeThemeButton onClick={() => handleChangeTheme()}>
            <span>
              Theme
            </span>
          </ChangeThemeButton>
        </ButtonGroup>

      </ContentWrapper>

    </Container>
  );
}
