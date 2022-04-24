import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";

export const startLogin = (username, password) => {
  return async(dispatch) => {
    
    const resp = await fetchSinToken( 'auth' , {username, password}, 'POST' );
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(login({uid: body.uid, name: body.name}));
    }else{
      Swal.fire({
        icon: 'error',
        title: body.msg,
        toast: true,
        timerProgressBar: true,
      })
    }
  }
}

const login = (user) => ({
  type: types.authLogin,
  payload: user
});

export const startCheckin = () => {
  return async (dispatch) => {
    
    const resp = await fetchConToken( 'auth/renew' );
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(login({
        uid: body.uid, 
        name: body.name
      }));

    }else{
      dispatch(checkingFinish());
    }
  }
}

const checkingFinish = () => ({
  type: types.authCheckinFinish
})


export const startLogout = () => {  
  return (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('token-init-date');

    dispatch(logout());
  }
}

const logout = () => ({ type: types.authLogout });




