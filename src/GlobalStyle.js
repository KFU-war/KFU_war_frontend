import { createGlobalStyle } from 'styled-components';

import MontExtraLight from "./assets/fonts/Mont/Mont-ExtraLight.otf"
import MontHeavy from "./assets/fonts/Mont/Mont-Heavy.otf";
import ProductSansBold from "./assets/fonts/ProductSans/ProductSansBold.ttf"
import ProductSansItalic from "./assets/fonts/ProductSans/ProductSansItalic.ttf"
import ProductSansRegular from "./assets/fonts/ProductSans/ProductSansRegular.ttf"
import ProductSansBoldItalic from "./assets/fonts/ProductSans/ProductSansBoldItalic.ttf"

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Mont";
    src: url('${MontExtraLight}') format("opentype");
    font-style: normal;
    font-weight: normal;
}

@font-face {
    font-family: "Mont";
    src: url('${MontHeavy}') format("opentype");
    font-style: normal;
    font-weight: bold;
}

@font-face {
    font-family: 'ProductSans';
    src: url('${ProductSansBold}');
    font-style: normal;
    font-weight: bold;
}

@font-face {
    font-family: 'ProductSans';
    src: url('${ProductSansItalic}');
    font-style: italic;
    font-weight: normal;
}

@font-face {
    font-family: 'ProductSans';
    src: url('${ProductSansRegular}');
    font-style: normal;
    font-weight: normal;
}

@font-face {
    font-family: 'ProductSans';
    src: url('${ProductSansBoldItalic}');
    font-style: italic;
    font-weight: bold;
}

html, body, button, input {
  margin: 0;
  font-family: 'Mont', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalStyle;