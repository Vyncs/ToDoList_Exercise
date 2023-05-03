import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['blue']}
    }
    body {
        background-color ${props => props.theme['gray-500']};
        /* color ${props => props.theme['gray-300']}; */

        /* deixar fonte mais nítida, menos borrada */
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 16px Inter, sans-serif
    }
`