import styled from "styled-components"
import { tampon } from "../../utils/datas/tampon"
import Product from "../../components/product/product"
import { useEffect, useState } from "react"
import Cart from "../../components/cart/cart"

function Order(){
    const Container=styled.div`
        margin: 10px;
        display: flex;
        flex-direction: row;
        gap: 5px
    `
    const Left = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 75%;
        gap: 10px
    `
    const Right = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
    `
    const Reinitialiser = styled.div`
        background-color: #ffffff;
        border-radius: 10px;
        width: 70px;
        height: 20px;
        text-align: center;
        padding: 5px;
    `

    const savedCart= localStorage.getItem('cart')
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },
    [cart])

    
    const [ActiveCategory, setActiveCategory] = useState('')
    const categories = tampon.reduce((acc, item)=> 
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
        <Container>
            <Left>
                <div className="categories">
                    <h3>Categories</h3>
                    <div>
                        <Reinitialiser onClick={()=> setActiveCategory('')}>
                            <h6>All</h6>
                        </Reinitialiser>

                        {categories.map((item, index)=>
                            <div key={index} className="itemCategory" onClick={()=> setActiveCategory(item)}>
                                <h6>{item}</h6>
                            </div>
                        )}
                    </div>
                </div>
                <div className="list_products">
                    <h3>Listes Produits</h3>
                    <div>
                        {tampon.map(({id,name,prix,image,category})=>
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
            </Left>
            <Right>
                <Cart cart={cart} updateCart={updateCart}/>
            </Right>
        </Container>
    )
}

export default Order