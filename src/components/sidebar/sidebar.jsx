import styled from "styled-components"
import open_menu from '../../assets/image/icons/open_menu.png'
import '../../utils/style/App.css'
import { Link } from 'react-router-dom'
import { menus } from "../../utils/datas/menus"

const Bar= styled.div`
    margin: 15px;
    display: flex;
    flex-direction: column;
`
const Titre = styled.div`
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
                <div>
                    {menus.map((item, index)=>(
                        <Link to={item.path} key={index} className="menu_item">
                            <div>
                                <img src={item.image} alt="icon"/>
                            </div>
                            <div>{item.titre}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </Bar>
    )
}

export default Sidebar