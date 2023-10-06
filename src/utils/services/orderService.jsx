import axios from "axios"


const baseUrl = "http://localhost:3000"


export function getOrder(){
    return axios.get(`${baseUrl}/orders`)
}

export function getOrdersByPage(keywork="", page=1, size=4){
    return axios.get(`${baseUrl}/orders?name_like=${keywork}&_page=${page}&_limit=${size}`)
}

export function deleteOrder(id){
    return axios.delete(`${baseUrl}/orders/${id}`)
}

export function getOrderById(id){
    return axios.get(`${baseUrl}/orders/${id}`)
}

export function saveOrder(order){
    return axios.post(`${baseUrl}/orders`,order)
}

export function updateOrder(order){
    return axios.put(`${baseUrl}/orders/${order.id}`,order)
}