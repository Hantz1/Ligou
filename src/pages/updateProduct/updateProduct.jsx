import React, { useEffect, useState } from 'react'
import { getProductById, updateProduct } from '../../utils/services/productService'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateProduct() {
  // Pour retourne a la ligne des produits
  const navigate= useNavigate();


  const {id} = useParams()

  const [nom, setNom] = useState('')
  const [prix,setPrix] = useState(0)
  const [categorie, setCategorie] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)

  useEffect(()=>{
    handleGetByProduct(id)
  }, [])
  
  const handleGetByProduct=(id)=>{
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

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <div className='container'>
        <div className='container_add_product'>
        <div className="header_container_add_product">
          <button onClick={()=>navigate('/products')}>Retour</button>
          <h4>Modification d'un Produit</h4>
        </div>
        <form onSubmit={handleUpdateProduct} className='form_container_add_product'>
          <div className='form_group_add_product'>
            <label className='form_label'>Nom</label>
            <input value={nom} onChange={(e)=> setNom(e.target.value)} className='form_input_product' placeholder='Saisie le nom du produit'></input>
          </div>
          <div className='form_group_add_product'>
            <label className='form_label'>prix</label>
            <input value={prix} onChange={(e)=> setPrix(e.target.value)} className='form_input_product' placeholder='. gdes'></input>
          </div>
          <div className='form_group_add_product'>
            <label className='form_label'>categorie</label>
            <input value={categorie} onChange={(e)=> setCategorie(e.target.value)} className='form_input_product' placeholder='De quelle categorie fait-il partie?'></input>
          </div>
          <div className='form_group_solo'>
            <label className='form_label'>Description</label>
            <textarea value={description} onChange={(e)=> setDescription(e.target.value)} className='form_input_product_solo' placeholder='Decrivez le!'></textarea>
          </div>
          <div className='form_group_solo'>
            <label className='form_label'>image</label>
            <input type="file" onChange={onImageChange} className='form_input_product_solo' placeholder='Click to Upload a file'></input>
          </div>
          <div className='form_group_button'>
            {/* <button className='form_button_cancel' onClick={()=>vider()}>Vider</button> */}
            <button className='form_button_save'>Sauvegarder</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProduct