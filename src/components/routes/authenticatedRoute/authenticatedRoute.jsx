import React, { useContext } from 'react'
import { IsAuthenticated } from '../../../utils/context/context'
import { Route } from 'react-router-dom'
import login from '../../../pages/login/login'

function AuthenticatedRoute({path, component}) {

  const {isAuthenticated} = useContext(IsAuthenticated)
  
    return isAuthenticated ? (
        <Route exact path={path} component={component}/>
  ):(
        <></>
    )
}

export default AuthenticatedRoute