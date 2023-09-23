import {createGlobalStyle} from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
    }

    body{
        background-color: #f9f9f9;
    }
`

function GlobalStyle(){
    return(
        <StyledGlobalStyle/>
    )
}

export default GlobalStyle