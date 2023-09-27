// import close from '../../assets/image/icons/close.png'
import deleteitem from '../../assets/image/icons/delete.png'

function Cart({cart, updateCart}){

    let date = new Date();

    // Methode pour faire la somme des items du cart
    const totalVente= cart.reduce(
        (acc, productType) => acc + productType.amount * productType.prix,
    0)

    const totalAmount= cart.reduce(
        (acc, productType) => acc + productType.amount,
    0)

    function remove(name){
        console.log(`${name} est l'element supprime dans la liste de cart.`)
    }

    return (
        <div className="cart">
            <div className="cart_head">
                <div className="cart_title">
                    <h5>Current orders</h5>
                    <h6>No.301931</h6>
                    <h6>Date: {date.toLocaleDateString()}</h6>
                </div>
                <div className="cart_icon">
                    <img src={deleteitem} alt="close" onClick={()=> updateCart([])}/>
                </div>
            </div>
            <div className="cart_list">
                {cart.map((item, index)=>
                    <div key={index} className="cart_item">
                        <div className="cart_item_image">
                            <img src={item.image} alt="imagecart"/>
                        </div>
                        <div className="cart_item_body">
                            <h5>{item.name}</h5>
                            <h6>{item.prix}</h6>
                        </div>
                        <div className="cart_item_other">
                            <img src={deleteitem} alt="delete" onClick={()=> remove(item.name)}/>
                            <div>
                                <h6>{item.amount}</h6>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="cart_calcul">
                <div>
                    <h5>items</h5>
                    <h6>{totalAmount}</h6>
                </div>
                <div>
                    <h5>Tax (10%)</h5>
                    <h6>Prix gdes</h6>
                </div>
                <div>
                    <h5>Total</h5>
                    <h6>{totalVente} gdes</h6>
                </div>
            </div>
            <div className="cart_valide">
                <h5>Print Bills</h5>
            </div>
        </div>
    )
}
export default Cart