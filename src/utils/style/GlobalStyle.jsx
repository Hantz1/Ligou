import {createGlobalStyle} from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
    }

    body{
        font-family: 'Montserrat Regular';
        background-color: #f9f9f9;
        src: local('Montserrat Regular'), url('../src/assets/fonts/Montserrat-Regular.ttf') format ('ttf');
        src: local('Montserrat Black'), url('../src/assets/fonts/Montserrat-Black.ttf') format ('ttf');
        src: local('Montserrat Bold'), url('../src/assets/fonts/Montserrat-Bold.ttf') format ('ttf');
        src: local('Montserrat ExtraBold'), url('../src/assets/fonts/Montserrat-ExtraBold.ttf') format ('ttf');
    }
`

function GlobalStyle(){
    return(
        <StyledGlobalStyle/>
    )
}

export default GlobalStyle