import React, { createContext, useState } from "react";
import { hasAuthenticated } from "../services/Auth.Api";

export const ProductContext = createContext()
export function ProductProvider ({children}){
    const products= useState([])
    
    return(
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}

export const PathContext = createContext()
export function PathProvider({children}){
    const path = useState('')
    return(
        <PathContext.Provider value={path}>
            {children}
        </PathContext.Provider>
    )
}

export const IsOpenContext = createContext()
export function IsOpenProvider({children}){
    const isOpen = useState(false)
    return(
        <IsOpenContext.Provider value={isOpen}>
            {children}
        </IsOpenContext.Provider>
    )
}

export const IsAuthenticated = createContext()
export function IsAuthenticatedProvider({children}){
    const auth = useState(hasAuthenticated())
    return(
        <IsAuthenticated.Provider value={auth}>
            {children}
        </IsAuthenticated.Provider>
    )
}