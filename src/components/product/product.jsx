function Product({name, prix, image}){
    return(
        <div className="card">
            <div className="header_card">
                <img src={image} alt="img_product"/>
            </div>
            <div className="body_card">
                <div>
                    <h5>{name}</h5>
                    <h6>{prix} gdes</h6>
                </div>
            </div>
        </div>
    )
}

export default Product