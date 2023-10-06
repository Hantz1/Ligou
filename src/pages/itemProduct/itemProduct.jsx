import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../utils/services/productService'
import './itemProduct.css'

function ItemProduct() {

  const id = useParams()
  
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
    }
    ).catch((error)=> 
      console.log(error)
    )
  }

  return (
    <div className='container'>
      <div className='container_item_product'>
        <div className='header_item_product'></div>
        <div className='body_item_product'></div>
      </div>
    </div>
  )
}

export default ItemProduct