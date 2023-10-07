import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteProduct, getProductById } from '../../utils/services/productService'
import './itemProduct.css'
import supprimer from '../../assets/image/icons/delete.png'
import edit from '../../assets/image/icons/edit.png'

function ItemProduct() {

  const navigate = useNavigate()
  const {id} = useParams()
  
  const [nom, setNom] = useState('')
  const [prix,setPrix] = useState(0)
  const [categorie, setCategorie] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)

  useEffect(()=>{
    handleGetProductById(id)
  })

  const handleGetProductById=(id)=>{
    getProductById(id)
    .then((resp)=>{
      let product=resp.data
      setNom(product.nom)
      setPrix(product.prix)
      setDescription(product.description)
      setImage(product.image)
      setCategorie(product.categorie)
      console.log(product)
    }
    ).catch((error)=> 
      console.log(error)
    )
  }

  function deleteItem(id){
    deleteProduct(id)
    .then((resp)=>{
    })
    .catch((error)=>{
        console.log(error)
    })
  }

  return (
    <div className='container'>
      <div className='container_item_product'>
        <div className='header_item_product'>
          <div>
            <h5>Back</h5>
          </div>
          <div className='manipule_item_product'>
            <button className='manipule_item_product_edit'  onClick={()=> navigate(`/updateProduct/${id}`)}>
              <img src={edit} alt='edit'/>
              <h5>Modifier</h5>
            </button>
            <button className='manipule_item_product_delete' onClick={()=>deleteItem(id)}>
              <img src={supprimer} alt='delete'/>
              <h5>Supprimer</h5>
            </button>
            
          </div>
        </div>
        <div className='body_item_product'>
          <div className='img_item_product'>
            <img src={image} alt='img'/>
          </div>
          <div className='about_item_product'>
            <h1>{nom}</h1>
            <h4>Gdes {prix}</h4>
            <h6>{description}</h6>
            <h5>{categorie}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemProduct