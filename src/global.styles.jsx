import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Open Sans Condensed';
        padding: 20px 60px;

        @media screen and (max-width:800px) {
            padding: 5px;
        }
    }
    
    a {
        text-decoration: none;
        color: black;
    }
`

export default GlobalStyle;