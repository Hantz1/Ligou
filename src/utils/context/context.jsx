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