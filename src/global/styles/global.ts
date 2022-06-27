import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

:root {
    --white: #ffffff;

    --gray_100: #e1e1e6;
    --gray_500: #a8a8b3;
    --gray_900: #121214;

    --cyan_500: #61dafb;
    --yellow_500: #eba417;


}

body, select, input, textarea, button {
    font: 400 1rem "Roboto", sans-serif;
}

body {
    background-color: var(--gray_900);
    color: var(--white);
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
