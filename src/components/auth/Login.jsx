import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './Login.css';

export const Login = () => {

  const dispatch = useDispatch();

  const [formLoginValue, handleLoginInputChange] = useForm({
    lUsername: 'mnb123',
    lPassword: '123456'
  });

  const {lUsername, lPassword} = formLoginValue;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch( startLogin(lUsername, lPassword) );
  }

  return (
    <div className="contenedor_Login">
      <div className="login-dark d-md-block">
        <form onSubmit={handleLogin}>
          <div className="illustration logo">
          </div>
          <div className="form-group">
            <input 
              className="form-control" 
              type="text" 
              name="lUsername"
              placeholder="Usuario" 
              value={lUsername}
              onChange={handleLoginInputChange}
              />
          </div>
          <div className="form-group">
            <input 
              className="form-control" 
              type="password" 
              name="lPassword" 
              placeholder="Contrasena" 
              value={lPassword}
              onChange={handleLoginInputChange}
              />
          </div>
          <div className="form-group  d-grid gap-2">
            <input className="btn btn-primary" type="submit" value="Login"/>
          </div>
        </form>   
      </div>
    </div>
  )
}
