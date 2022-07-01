import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

:root {
    --white: ${({theme}) => theme.colors.white };

    --gray_100: ${({ theme }) => theme.colors.gray_100};
    --gray_500: ${({ theme }) => theme.colors.gray_500};
    --gray_600: ${({ theme }) => theme.colors.gray_600};
    --gray_700: ${({ theme }) => theme.colors.gray_700};
    --gray_900: ${({ theme }) => theme.colors.gray_900};

    --cyan_500: ${({ theme }) => theme.colors.cyan_500};
    --yellow_500: ${({ theme }) => theme.colors.yellow_500};


}

body, select, input, textarea, button {
    font: 400 1rem "Roboto", sans-serif;
}

body {
    background-color: var(--gray_900);
    color: var(--gray_100);
}
button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}

@media(max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
}

@media(max-width: 728px) {
    html {
        font-size: 87.5%;
    }
}`;
