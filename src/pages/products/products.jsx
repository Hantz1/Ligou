import { useContext, useEffect } from "react"
import { deleteProduct, getProducts } from "../../utils/services/productService"
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../utils/context/context";


function Products(){
    const navigate = useNavigate();
    
    const [products, setProducts] = useContext(ProductContext)
    
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
        <div>
            <Link to={"/newProduct"}>Add product</Link>

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nom</th>
                        <th>prix</th>
                        <th>category</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(({id, nom, prix, category})=>
                            (<tr key={id}>
                                <td>{id}</td>
                                <td>{nom}</td>
                                <td>{prix}</td>
                                <td>{category}</td>
                                <td onClick={()=> deleteItem(id)}>Delete</td>
                                <td onClick={()=> navigate(`/updateProduct/${id}`)}>Update</td>
                            </tr>)
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Products