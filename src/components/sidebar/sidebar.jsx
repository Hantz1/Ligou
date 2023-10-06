import styled from "styled-components"
import { Link } from 'react-router-dom'
import { menus } from "../../utils/datas/menus"
import './sidebar.css'
import { useContext, useEffect } from "react"
import { IsOpenContext, PathContext } from "../../utils/context/context"

const Bar= styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    gap: 30px
`
const Titre = styled.div`
    margin: 10px;
`
function Sidebar(){
    const [currentRoute, setCurrentRoute]= useContext(PathContext)
    const [isOpen, setOpen] = useContext(IsOpenContext)

    useEffect(()=>{
        const path= window.location.pathname.toLocaleLowerCase();
        setCurrentRoute(path)
    },[])

    return(
        <Bar>
            <div>
                <Titre>
                    <div className={isOpen === true ? ('titre') : ('titre_not_isOpen')}>
                        <h3>Ligou</h3>
                    </div>
                    {/* <div className="open">
                        <img src={open_menu} alt="open"/>
                    </div> */}
                </Titre>
            </div>

            {/* Menu */}
            <div>
                {menus.map((item, index)=>(
                    <Link to={item.path}
                         key={index}  
                         onClick={()=>setCurrentRoute(item.path)}
                         className={currentRoute === item.path
                                    ?"menu_item_active"
                                    :"menu_item"} 
                         style={{ textDecoration: 'none' }}
                    >
                        <div>
                            <img 
                                src={item.image}
                                alt="icon"
                                className={currentRoute === item.path
                                    ?"icon_active"
                                    :"icon"}
                            />
                        </div>
                        <div className={isOpen ===true ? (currentRoute === item.path
                                    ?"title_menu_active"
                                    :"title_menu") : 'title_menu_not_isOpen'}>{item.titre}</div>
                    </Link>
                ))}
            </div>
        </Bar>
    )
}

export default Sidebar