import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --color-primary: #E40F0F;
    --color-white: #fff;
    --color-grey-500: #1D1D1D;
    --color-black: #000;
}
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
button{
cursor: pointer;
font-family: "Inter";
border: none;
}
li{
list-style: none;
}
`;
