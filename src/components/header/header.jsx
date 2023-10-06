import { useContext, useState } from "react"
import styled from "styled-components"
import '../../utils/style/App.css'
import iconProfil from '../../assets/image/icons/profil.JPG'
import iconNotification from '../../assets/image/icons/notification.png'
import './header.css'

import open_menu from '../../assets/image/icons/open_menu.png'
import { IsOpenContext } from "../../utils/context/context"

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
    
    const [isOpen, setOpen] = useContext(IsOpenContext)

    const changeIsOpen = ()=>{
        isOpen === true ? (setOpen(false)) : (setOpen(true))
    }

    return(
        <Head>
            <div>
                <Left>
                    <div className="open">
                        <img src={open_menu} alt="open" onClick={()=>changeIsOpen()}/>
                    </div>
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