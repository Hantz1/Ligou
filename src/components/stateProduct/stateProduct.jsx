import React, { useContext } from 'react'
import { ProductContext } from '../../utils/context/context'

function StateProduct() {
    const [state, setState] = useContext(ProductContext)
  return (
    <div>{state.length}</div>
  )
}

export default StateProduct