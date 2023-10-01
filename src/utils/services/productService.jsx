import axios from "axios"


const baseUrl = "http://localhost:3000"


export function getProducts(){
    return axios.get(`${baseUrl}/products`)
}

export function getProductsByPage(keywork="", page=1, size=4){
    return axios.get(`${baseUrl}/products?name_like=${keywork}&_page=${page}&_limit=${size}`)
}

export function deleteProduct(id){
    return axios.delete(`${baseUrl}/products/${id}`)
}

export function getProductById(id){
    return axios.get(`${baseUrl}/products/${id}`)
}

export function saveProduct(produit){
    return axios.post(`${baseUrl}/products`,produit)
}

export function updateProduct(produit){
    return axios.put(`${baseUrl}/products/${produit.id}`,produit)
}