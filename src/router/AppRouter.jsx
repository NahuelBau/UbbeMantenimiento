import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { startCheckin } from '../actions/auth'
import { Login } from '../components/auth/Login'
import { PrincipalRouter } from './PrincipalRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'



export const AppRouter = () => {

  const dispatch = useDispatch();
  
  const {checking, uid} = useSelector( state => state.auth );
  


  useEffect(() => {
    dispatch(startCheckin());
    // dispatch(uiCloseModal())
  }, [dispatch, uid])


  
  if (checking) {
    <h1>Espere</h1>
  }
  return (

    <Router>   
    <div>
        <Routes>

          <Route path='/login' element={
            <PublicRoute uid={uid}>
              <Login />
            </PublicRoute>
          }/>,

          <Route path='/*' element={
            <PrivateRoute uid={uid}>
              <PrincipalRouter />
            </PrivateRoute>
          }/>
        </Routes>
          </div>
    </Router>

  )
}
