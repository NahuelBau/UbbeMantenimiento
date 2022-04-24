import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";
// import { startGetWZNames } from "./availableDevices";
// import { startGetAllDevice } from "./equipos__V2";


export const choiceWZName = (event) => ({
  type: types.CREATION_SW,
  payload: event
})

export const choiceSiteName = (event) => ({
  type: types.CREATION_SN,
  payload: event
})

export const choiceDeviceType = (event) => ({
  type: types.CREATION_DTN,
  payload: event
})

export const choiceDeviceName = (event) => ({
  type: types.CREATION_DN,
  payload: event
});


//_________ Creacion ___________
export const eventStartCreateDevice = (event) => {
  return async( dispatch ) => {
    try {
      const resp = await fetchConToken('devices/create', event, 'POST');
      const body = await resp.json();
      
      if (body.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Equipo creado! :D',
          timer: 2400 ,
          position: 'center',
          toast: true,
          showConfirmButton: false,
          timerProgressBar: true,
        });
        return(true)

      }else{
        Swal.fire({
          icon: 'error',
          title: body.msg+'.',
          // timer: 2400 ,
          position: 'center',
          toast: true,
          showConfirmButton: true,
          timerProgressBar: true,
        });
      }

      
    } catch(error) {
      console.log(error);
    }
    
  }
};




