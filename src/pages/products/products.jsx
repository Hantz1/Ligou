import { useContext, useEffect, useState } from "react"
import { deleteProduct, getProducts } from "../../utils/services/productService"
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../utils/context/context";
import deleteElement from '../../assets/image/icons/delete.png'
import edit from '../../assets/image/icons/edit.png'
import './products.css'
function Products(){
    const navigate = useNavigate();
    
    const [products, setProducts] = useContext(ProductContext)
    const column = ['Id' , 'Nom', 'Prix', 'Category','Action' ]

    const [currentPage, setCurrentPage]= useState(1)
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = products.slice(firstIndex, lastIndex)
    const npage = Math.ceil(products.length/recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    
    

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


    return(
        <div className="body-products">
            <div className="overview-header">
                header
            </div>

            <div className="overview-table">

                <div className="content-header">
                    <div>
                        <form>
                            <input type='search'/>
                        </form>
                    </div>
                    <div className="button-add">
                        <Link to={"/addProduct"} className="button-link">Add product</Link>
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
                    <nav>
                        <ul className='pagination'>
                            <li className='page-item'>
                                <button onClick={prePage} className='page-link'>prev</button>
                            </li>
                            {
                                numbers.map((n,i)=>(
                                    <li key={i} className={`page-item ${currentPage===n ? 'active' : ''}`}>
                                        <button onClick={()=>changeCPage(n)} className='page-link'>{n}</button>
                                    </li>
                                ))
                            }
                            <li className='page-item'>
                                <button onClick={nextPage} className='page-link'>Next</button>
                            </li>
                        </ul>
                    </nav>
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

export default Products