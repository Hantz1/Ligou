import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { PathContext } from "../../utils/context/context";
import deleteElement from '../../assets/image/icons/delete_1.png'
import edit from '../../assets/image/icons/edit.png'
import './orders.css'
import search from '../../assets/image/icons/search.png'
import { deleteOrder, getOrder } from "../../utils/services/orderService";

function Orders(){
    const navigate = useNavigate();
    const path = useContext(PathContext)

    const [orders, setOrders] = useState([])
    const column = ['#' , 'Produits', 'Quantité', 'montant','date','Action' ]

    const [currentPage, setCurrentPage]= useState(1)
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = orders.slice(firstIndex, lastIndex)
    const npage = Math.ceil(orders.length/recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    
    const [searchItem, setSearchItem] = useState();

    useEffect(()=>{
        handleGetOrders()
    }, [])

    const handleGetOrders = ()=>{
        getOrder()
            .then((resp)=> {
                setOrders(resp.data)
                console.log(orders)
            })
            .catch((error)=>{ 
                console.log(error)
            })
    }

    function deleteItem(id){
        deleteOrder(id)
        .then((resp)=>{
            handleGetOrders()
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    // Mise en place pour les recherches
    const onSearch=(e)=>{
        e.event.preventDefault()
    }

    return(
        <div className="body-products">
            <div className="overview-header">
                <h3 className="header_title">Liste des commandes</h3>
                <h6 className="header_path">{path}</h6>
            </div>

            <div className="overview-table">

                <div className="content-header-table">
                    <div>
                        <form>
                            <form class="form_div" onSubmit={onSearch}>
                                <div className="form_submit">
                                    <img src={search} alt="search" className="form_button"/>
                                </div>
                                <input 
                                    className="form_input" 
                                    placeholder="search"
                                    value={searchItem}
                                    onChange={(e)=>setSearchItem(e.target.value)}
                                /> 
                            </form>
                        </form> 
                    </div>
                    <div className="button-add">
                        <Link to={"/addProduct"} className="button-link">+ Add product</Link>
                    </div>
                </div>
                
                <div className="content-table">
                    <table>
                        <thead>
                            <tr>
                                {column.map((item, i)=>(
                                    <th key={i}>{item}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                records.map(({id, productsConcat, totalAmount, totalVente,dateVente})=>
                                    (<tr key={id}>
                                        <td>{id}</td>
                                        <td>{productsConcat}</td>
                                        <td>{totalAmount}</td>
                                        <td>{totalVente} Gourdes</td>
                                        <td>{dateVente}</td>
                                        <td>
                                            <img src={deleteElement} alt="delete" onClick={()=> deleteItem(id)} className="icon-delete"/>
                                            <img src={edit} alt="update" onClick={()=> navigate(`/updateProduct/${id}`)} className="icon-update"/>
                                        </td>
                                    </tr>)
                                )
                            }
                        </tbody>
                    </table>
                </div>
                
                <div className="content-pagination">
                    <ul className='pagination'>
                        <li className='page-item'>
                            <h6 onClick={prePage} className='page-link'>prev</h6>
                        </li>
                        {
                            numbers.map((n,i)=>(
                                <li key={i} className={`page-item ${currentPage===n ? 'active' : ''}`}>
                                    <h6 onClick={()=>changeCPage(n)} className='page-link'>{n}</h6>
                                </li>
                            ))
                        }
                        <li className='page-item'>
                            <h6 onClick={nextPage} className='page-link'>Next</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )

    function prePage(){
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
        }
      }
      function changeCPage(id){
        setCurrentPage(id)
      }
    
      function nextPage(){
        if(currentPage !== npage){
            setCurrentPage(currentPage + 1)
        }
      }
     
}

export default Orders