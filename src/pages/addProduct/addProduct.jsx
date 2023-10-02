import React, { useState } from 'react'
import { saveProduct } from '../../utils/services/productService'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
  const navigate = useNavigate()

  const [nom, setNom] = useState('')
  const [prix,setPrix] = useState(0)
  const [categorie, setCategorie] = useState('')
  const [image, setImage] = useState(null)

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  const handleSaveProduct=(event)=>{
    event.preventDefault()
    let product={nom, prix, image, categorie}
    saveProduct(product)
    .then((resp)=>
        alert(JSON.stringify(resp.data)),
        navigate('/products')
    ).catch((error)=>
      alert(error)
    )
  }

  return (
    <div>
      <form onSubmit={handleSaveProduct}>
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
          <input type="file" onChange={onImageChange}></input>
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

export default AddProduct