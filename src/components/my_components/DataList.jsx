import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'

import {arraySites, arrayDeviceTypes} from '../../actions/equipos'
// import { startGetDeviceTypeNames, startGetSitesNames } from '../../actions/availableDevices';

import { choiceDeviceType, choiceSiteName, choiceWZName } from '../../actions/createDevice';


export const DataListWZ = ({options}) => {

  const {equipos,WZAvalible} = useSelector( state => state.equipos)
  const [workZoneName, setWorkZoneName] = useState(null);
  const dispatch = useDispatch();


  const selected = (e) => {
    if (e.target.value === '') {
      console.log('esperando una seleccion...')
    }else{
      setWorkZoneName(e.target.value);
      console.log('Su seleccion es:', e.target.value);
    }
  }

  const saveButton = () => {

    dispatch(arraySites(equipos,workZoneName));
    dispatch(choiceWZName(workZoneName));

    Swal.fire({
      icon: 'success',
      title: 'Zona de trabajo seleccionada',
      timer: 2400 ,
      position: 'top',
      toast: true,
      showConfirmButton: false,
      timerProgressBar: true,
    })

  }
  
  return (
    <div className='d-flex'>
      <input 
        className="form-control " 
        list="list_1" 
        placeholder="Ingrese grupo de lugares..." 
        onSelect={selected}
      />
      <datalist id="list_1">
        {
          WZAvalible.map( opt => <option  key={opt} value={opt} />)
        }
      </datalist>
      <button 
        className="btn btn-success btn-lg"
        onClick={saveButton}
      ><i className="bi bi-check-lg"></i></button>
      


    </div>
  )
}

export const DataListS = ({options}) => {

  const dispatch = useDispatch();
  const [siteName, setSiteName] = useState(null);
  const {equipos,SiteAvalible} = useSelector( state => state.equipos)



  const selected = (e) => {
    if (e.target.value === '') {
      console.log('esperando una seleccion...')
    }else{
      setSiteName(e.target.value);
      console.log('Su seleccion es:', e.target.value);
    }
  }

  const saveButton = () => {
    dispatch(choiceSiteName(siteName));
    dispatch(arrayDeviceTypes(equipos, siteName))

    // Alerta
    Swal.fire({
      icon: 'success',
      title: 'Ubicacion seleccionada',
      timer: 2400 ,
      position: 'top',
      toast: true,
      showConfirmButton: false,
      timerProgressBar: true,
    })
    
  }
  
  return(
    <div className='d-flex'>
    <input 
      className="form-control" 
      list="list_2" 
      placeholder="Ingrese un lugar..." 
      onSelect={selected}
      />
    <datalist id="list_2">
      {
        SiteAvalible.map( opt => <option key={opt} value={opt}/>)
      }
    </datalist>
    <button 
        className="btn btn-success btn-lg"
        onClick={saveButton}
      ><i className="bi bi-check-lg"></i></button>
    </div>


  )
}

export const DataListDT = ({options}) => {
  const dispatch = useDispatch();

  const [deviceType1, setDeviceType] = useState(null);
  const {DeviceTypeAvalible} = useSelector( state => state.equipos)

  


  const selected = (e) => {
    if (e.target.value === '') {
      console.log('esperando una seleccion...')
    }else{
      setDeviceType(e.target.value);
      console.log('Su seleccion es:', e.target.value);
    }
  }

  const saveButton = () => {
    dispatch(choiceDeviceType(deviceType1));

    // Alerta
    Swal.fire({
      icon: 'success',
      title: 'Tipo de equipo seleccionado',
      timer: 2400 ,
      position: 'top',
      toast: true,
      showConfirmButton: false,
      timerProgressBar: true,
    })
    
  }

  return(
    <div className="d-flex">
    <input 
      required
      className="form-control" 
      list="list_3" 
      placeholder="Ingrese un tipo de equipo..." 
      onSelect={selected}
    />
    <datalist id="list_3">
      {
        DeviceTypeAvalible.map( value => <option key={value} value={value}/>)
      }
    </datalist>
    <button 
        className="btn btn-success btn-lg"
        onClick={saveButton}
      ><i className="bi bi-check-lg"></i></button>
    
  </div>
  )
}
