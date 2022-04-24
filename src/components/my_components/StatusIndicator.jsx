import React from 'react'
import { useSelector } from 'react-redux'



export const StatusIndicator = () => {

  const {status} = useSelector( state => state.equipos.device);

  
  let one = false;
  let two = false;
  let three = false;

  if(status === 'OK.'){
    one = true;
  }else if(status === 'Con observaciones.'){
    two = true
  }else{
    three = true
  }


  return (

    <div>
      
      {
        one && <span className="muted-text">Estado: <span className="font-weight-bold text-success"><i className="bi bi-circle-fill text-success"></i> OK.</span></span>
      }
      
      {

        two  &&  <span className="muted-text">Estado: <span className="font-weight-bold text-warning"><i className="bi bi-circle-fill text-warnig"></i> Con observaciones.</span></span>
      }


      {
        three && <span className="muted-text">Estado: <span className="font-weight-bold text-danger"><i className="bi bi-circle-fill text-danger"></i> Fuerda de servicio.</span></span>
      } 
    </div>
  )
}
