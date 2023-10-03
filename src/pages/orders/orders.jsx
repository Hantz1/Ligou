import { useContext, useEffect, useState } from "react"
import { deleteProduct, getProducts } from "../../utils/services/productService"
import { Link, useNavigate } from "react-router-dom";
import { PathContext, ProductContext } from "../../utils/context/context";
import deleteElement from '../../assets/image/icons/delete_1.png'
import edit from '../../assets/image/icons/edit.png'
import './orders.css'
import search from '../../assets/image/icons/search.png'

function Orders(){
    const navigate = useNavigate();
    const path = useContext(PathContext)

    const [products, setProducts] = useContext(ProductContext)
    const column = ['Id' , 'Nom', 'Prix', 'Category','Action' ]

    const [currentPage, setCurrentPage]= useState(1)
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = products.slice(firstIndex, lastIndex)
    const npage = Math.ceil(products.length/recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    
    const [searchItem, setSearchItem] = useState();

    useEffect(()=>{
        handleGetProducts()
    }, [])

    const handleGetProducts = ()=>{
        getProducts()
            .then((resp)=> {
                setProducts(resp.data)
                console.log(products)
            })
            .catch((error)=>{ 
                console.log(error)
            })
    }

    function deleteItem(id){
        deleteProduct(id)
        .then((resp)=>{
            handleGetProducts()
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
                                records.map(({id, nom, prix, category})=>
                                    (<tr key={id}>
                                        <td>{id}</td>
                                        <td>{nom}</td>
                                        <td>{prix}</td>
                                        <td>{category}</td>
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