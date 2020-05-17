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

body{
    overflow : hidden;
}

html, body{
    overflow-x : hidden;
}

html, body, button, input {
  margin: 0;
  font-family: 'Mont', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.Section{
    display: flex;
    flex-direction: column;
    width: 100vw;
    position: relative;
    color: white;
}

.img{
    width: 100%;
    height : 90vh;
}

.sectionContent{
    position: absolute;
    width: 50vw;
    margin: 0vw 25vw;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
}

.sectionContentheading{
    margin-bottom: 10%;
    font-size: 2.0em;
}

.sectionContentdesc{
    font-size: 1.0em;
}

.sectionContentlink{
    color: white;
    height: fit-content !important;
    margin-top: 10%;
    font-size: 1.3em;
}

.video-react-workinghover{
    width : 100%;
    height : 50%;
}

.video-react-big-play-button{
    top : 45% !important;
    left : 45% !important;
}

/*Laptop*/
@media all and (max-width: 1690px) {
    
}

/*iPad Pro*/
@media all and (max-width: 1280px) {
    .sectionContent{
        width: 50vw;
        height: 100%;
    }
    
    .sectionContentheading{
        margin-bottom: 10%;
        font-size: 2.0em;
    }
    
    .sectionContentdesc{
        font-size: 1.5em;
    }
    
    .sectionContentlink{
        margin-top: 10%;
        font-size: 1.7em;
    }
    
    .img{
        width: 100%;
        height : 60vh;
    }
}

/*iPad*/
@media all and (max-width: 980px) {

}

/*Mobile*/
@media all and (max-width: 480px) {
    .sectionContentheading{
        margin-bottom: 20%;
        font-size: 1.2em;
    }
    
    .sectionContentdesc{
        font-size: .75em;
    }
    
    .sectionContentlink{
        margin-top: 15%;
        font-size: 1.2em;
    }
}

`;

export default GlobalStyle;