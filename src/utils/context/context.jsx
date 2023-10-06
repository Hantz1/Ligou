import React, { createContext, useState } from "react";

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