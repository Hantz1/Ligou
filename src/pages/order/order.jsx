import styled from "styled-components"
import close from '../../assets/image/icons/close.png'

import { tampon } from "../../utils/datas/tampon"
import Product from "../../components/product/product"

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
    `
    const Right = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
    `
    
    function addCart(name){
        console.log(`Vous avez choisi:  ${name}`)
    }
    
    return(
        <Container>
            <Left>
                <div className="categories">
                    <h3>Categories</h3>
                </div>
                <div className="list_products">
                    <h3>Listes Produits</h3>
                    <div>
                        {tampon.map(({id,name,prix,image})=>(
                            <div key={id} onClick={()=>addCart(name)}>
                                <Product 
                                    name={name} 
                                    prix={prix} 
                                    image={image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Left>
            <Right>
                <div className="cart">
                    <div className="cart_head">
                        <div className="cart_title">
                            <h5>Current orders</h5>
                            <h6>No.301931</h6>
                            <h6>Date</h6>
                        </div>
                        <div className="cart_icon">
                            <img src={close} alt="close"/>
                        </div>
                    </div>
                    <div className="cart_list">

                    </div>
                    <div className="cart_calcul">
                        <div>
                            <h5>items(count)</h5>
                            <h6>Prix gdes</h6>
                        </div>
                        <div>
                            <h5>Tax</h5>
                            <h6>Prix gdes</h6>
                        </div>
                        <div>
                            <h5>Total</h5>
                            <h6>Prix gdes</h6>
                        </div>
                    </div>
                    <div className="cart_valide">
                        <h5>Print Bills</h5>
                    </div>
                </div>
            </Right>
        </Container>
    )
}

export default Order