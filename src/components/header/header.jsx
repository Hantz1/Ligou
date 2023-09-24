import { useState } from "react"
import styled from "styled-components"
import '../../utils/style/App.css'
import iconSearch from '../../assets/image/icons/search.png'
import iconProfil from '../../assets/image/icons/profil.JPG'
import iconNotification from '../../assets/image/icons/notification.png'

const Head = styled.header`
    margin: 10px;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Left = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Right= styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
`

function Header(){
    const [search, setSearch] = useState('Search')

    // Pour verifier les valeurs input
    function checkValue(value){
        setSearch(value)
    }


    return(
        <Head>
            <div>
                <Left>
                    <div className="bSearch">
                        <input type="image" src={iconSearch} alt="search"/>
                    </div>
                    <input 
                        type="text"
                        value={search}
                        onChange={(e)=>checkValue(e.target.value)}
                        className="input"
                    />
                </Left>
            </div>
            <div>
                <Right>
                    <div className="notification">
                        <img src={iconNotification} alt="notification"/>
                    </div>
                    <div className="profil">
                        <img src={iconProfil} alt="profil"/>
                        <div>
                            <h5>Hantz</h5>
                            <h6>PDG</h6>
                        </div>
                    </div>
                </Right>
            </div>
        </Head>
    )
}

export default Header