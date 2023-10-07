import { useNavigate } from 'react-router-dom'
import './product.css'

function Product({id, name, prix, image}){
    const navigate = useNavigate()

    return(
        <div className="card">
            <div className="header_card">
                <img src={image} alt="img_product"/>
            </div>
            <div className="body_card">
                <div>
                    <h5 onClick={()=>navigate(`/itemProduct/${id}`)}>{name}</h5>
                    <h6>{prix} gdes</h6>
                </div>
            </div>
        </div>
    )
}

export default Product