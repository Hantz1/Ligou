import panier from '../../assets/image/icons/panier.png'
import deleteitem from '../../assets/image/icons/delete.png'
import { saveOrder } from '../../utils/services/orderService';
import './cart.css';
import { useReactToPrint } from 'react-to-print';
import { useRef, useState } from 'react';
import { ComponentToPrint } from '../printer/componentToPrint';
import Toast from '../toast/toast';
import Modal from '../modal/modal';

function Cart({cart, updateCart}){

    // Dialog
    const [dialog, setDialog] = useState({
        title:'',
        message: '',
        isLoading: false
    }) 
    const handleDialog = (title, message, isLoading)=>{
        setDialog({
            title,
            message,
            isLoading
        })
    }
    // 



    // Printer
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    // 


    let date = new Date();

    // Methode pour faire la somme des items du cart
    const totalVente= cart.reduce(
        (acc, productType) => acc + productType.amount * productType.prix,
    0)

    const totalAmount= cart.reduce(
        (acc, productType) => acc + productType.amount,
    0)

    function remove(name){
        const FiltreCart = cart.filter((item)=>item.name !== name)
        updateCart(FiltreCart)
    }

    
    const valider=()=>{
        if(cart.length > 0){
            const productsSale = cart?.reduce((acc, item)=> 
            acc.includes(item.name) ? acc : acc.concat(item.name),
            [])
            const productsConcat= productsSale.toString()
            const dateVente= date.toLocaleDateString()

            let order= {productsConcat, totalVente, totalAmount, dateVente}
            saveOrder(order)
            .then((resp)=>
                alert(JSON.stringify(resp.data)),
                handleDialog('Imprission', 'Voulez-vous imprimer votre fiche?', true),
            ).catch((error)=>
                alert(error)
            )
        }
    }

    // Ce qu'on doit faire selon le choix de la Boite de dialog
    const confirmeDiolog = (choose) =>{
        if(choose){
            handlePrint()
            updateCart([])
            handleDialog('', '', false)
        }else{
            updateCart([])
            handleDialog('', '', false)
        }
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
            
            {cart.length > 0 ? 
                    (<div className="cart_list">
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
                    </div>) : 
                    (<div className='cart_list_vide'>
                        <div className='cart_list_vide_image'>
                            <img src={panier} alt='panier'/>
                        </div>
                        <div>
                            <h4>Panier vide</h4>
                            <h6>Pas de commande pour l'instant</h6>
                        </div>
                    </div>)
            }

            <div className="cart_calcul">
                <div>
                    <h5>items</h5>
                    <h6>{totalAmount}</h6>
                </div>
                <div>
                    <h5>Tax</h5>
                    <h6>Prix gdes</h6>
                </div>
                <div>
                    <h5>Total</h5>
                    <h6>{totalVente} gdes</h6>
                </div>
            </div>
            <button className={cart.length > 0 ? "cart_valide" : "cart_valide_disable"} onClick={()=>valider()}>
                <h5 className={cart.length > 0 ? "cart_valide_titre" : "cart_valide_titre_disable"}>valider</h5>
            </button>
            
            {/* <button onClick={handlePrint}>Print this out!</button> */}
            
            
            {/*  */}
            <div className="printer" >
                <ComponentToPrint ref={componentRef} cart={cart}/>
            </div>
            
            { dialog.isLoading  && <Modal onDialog={confirmeDiolog} title={dialog.title} message={dialog.message}/>}
            {/* <Toast/> */}
        </div>
    )
}
export default Cart