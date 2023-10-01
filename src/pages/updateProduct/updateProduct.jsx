import React, { useEffect, useState } from 'react'
import { getProductById, updateProduct } from '../../utils/services/productService'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateProduct() {
  // Pour retourne a la ligne des produits
  const navigate= useNavigate();


  const id = useParams();

  const [nom, setNom] = useState('')
  const [prix,setPrix] = useState(0)
  const [image, setImage] = useState('')
  const [categorie, setCategorie] = useState('')

  useEffect(()=>{
    handleGetByProduct(id)
  }, [])
  
  const handleGetByProduct=(id)=>{
    getProductById(id)
    .then((resp)=>{
      let product=resp.data
      setNom(product.nom)
      setPrix(product.prix)
      setImage(product.image)
      setCategorie(product.categorie)
    }
    ).catch((error)=> 
      console.log(error)
    )
  }

  const handleUpdateProduct=(event)=>{
    event.preventDefault()
    let product={id, nom, prix, image, categorie}
    updateProduct(product)
    .then((resp)=>
        alert(JSON.stringify(resp.data)),
        navigate('/products')
    ).catch((error)=>
      alert(error)
    )
  }

  return (
    <div>
      <form onSubmit={handleUpdateProduct}>
        <div>
          <label>Nom</label>
          <input value={nom} onChange={(e)=> setNom(e.target.value)}></input>
        </div>
        <div>
          <label>prix</label>
          <input value={prix} onChange={(e)=> setPrix(e.target.value)}></input>
        </div>
        <div>
          <label>image</label>
          <input value={image} onChange={(e)=> setImage(e.target.value)}></input>
        </div>
        <div>
          <label>categorie</label>
          <input value={categorie} onChange={(e)=> setCategorie(e.target.value)}></input>
        </div>
        <button>Save</button>
      </form>
    </div>
  )
}

export default UpdateProduct