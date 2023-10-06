import styled from "styled-components"
import Product from "../../components/product/product"
import { useContext, useEffect, useState } from "react"
import Cart from "../../components/cart/cart"
import { getProducts } from "../../utils/services/productService"
import { PathContext, ProductContext } from "../../utils/context/context"
import './products.css'

import {tampon} from '../../utils/datas/tampon'
import { Link } from "react-router-dom"

function Products(){
    const path = useContext(PathContext)

    // Sauvegarde des produits ajouté au cart dans le local storage
    const savedCart= localStorage.getItem('cart')
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },
    [cart])


    const [products, setProducts]= useContext(ProductContext)
    useEffect(()=>{
        handleGetProducts();
    },[])

    const handleGetProducts = ()=>{
        getProducts()
            .then((resp)=> {
                setProducts(resp.data)
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    
    // Pour trier les categories depuis productData
    const [ActiveCategory, setActiveCategory] = useState('')
    const categories = tampon?.reduce((acc, item)=> 
        acc.includes(item.category) ? acc : acc.concat(item.category),
    [])


    function addToCart(name, prix, image){
        const CartAjouter = cart.find((item)=>item.name === name)

        if(CartAjouter){
            const FiltreCartAjouter = cart.filter((item)=>item.name !== name)
            updateCart([
                ...FiltreCartAjouter,
                {name, prix, image, amount: CartAjouter.amount + 1}
            ])
        }else{
            updateCart([
                ...cart,
                {name, prix, image, amount:1}
            ])
        }
    }
    
    return(
        <div className="container">
            <div className="container_left">
                {/*  */}
                <div className="header_products">
                    <div className="header_title">
                        <h3>Liste des produits</h3>
                        <h6>{path}</h6>
                    </div>
                    <div className="header_button">
                        <Link to={"/addProduct"} className="button-link" >+ AddProduct</Link>
                    </div>
                </div>
                {/*  */}
                <div className="categories">
                    <h3>Categories</h3>
                    <div>
                        <div className="Reinitialiser" onClick={()=> setActiveCategory('')}>
                            <h6>All</h6>
                        </div>

                        {categories?.map((item, index)=>
                            <div key={index} className="itemCategory" onClick={()=> setActiveCategory(item)}>
                                <h6>{item}</h6>
                            </div>
                        )}
                    </div>
                </div>
                {/*  */}
                <div className="list_products">
                    {/* <h3>Listes</h3> */}
                    <div>
                        {tampon?.map(({id,name,prix,image,category})=>
                        !ActiveCategory || ActiveCategory === category 
                        ?(
                            <div key={id} onClick={()=>addToCart(name, prix,image)}>
                                <Product 
                                    name={name} 
                                    prix={prix} 
                                    image={image}
                                />
                            </div>
                        ) : null
                        )}
                    </div>
                </div>
            </div>
            <div className="container_right">
                <Cart cart={cart} updateCart={updateCart}/>
            </div>
        </div>
    )
}

export default Products