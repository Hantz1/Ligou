import styled from "styled-components"
import open_menu from '../../assets/image/icons/open_menu.png'
import { Link } from 'react-router-dom'
import { menus } from "../../utils/datas/menus"

const Bar= styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    gap: 30px
`
const Titre = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
function Sidebar(){
    return(
        <Bar>
            <div>
                <Titre>
                    <div className="titre">
                        <h3>Ligou</h3>
                    </div>
                    <div className="open">
                        <img src={open_menu} alt="open"/>
                    </div>
                </Titre>
            </div>

            {/* Menu */}
            <div>
                {menus.map((item, index)=>(
                    <Link to={item.path} key={index} className="menu_item" style={{ textDecoration: 'none' }}>
                        <div>
                            <img src={item.image} alt="icon"/>
                        </div>
                        <div className="menu_title">{item.titre}</div>
                    </Link>
                ))}
            </div>
        </Bar>
    )
}

export default Sidebar