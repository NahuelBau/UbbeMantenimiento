import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { choiceDeviceName, eventStartCreateDevice } from '../../../actions/createDevice'
import { DataListDT, DataListS, DataListWZ } from '../../my_components/DataList'
import './Crear.css'


export const Crear = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const [deviceNameCreate, setDeviceName] = useState(null);

  const {
    WZN_toCreate: workZoneName, 
    SN_toCreate: siteName, 
    DTN_toCreate: deviceTypeName, 
    DN_toCreate: deviceName} = useSelector( state => state.create );
    
    



  const saveButton = () => {
    dispatch(choiceDeviceName(deviceNameCreate));
    
    Swal.fire({
      icon: 'success',
      title: 'Nombre del nuevo equipo seleccionado. :)',
      timer: 2400 ,
      position: 'top',
      toast: true,
      showConfirmButton: false,
      timerProgressBar: true,
    })
  }

  const createNewDevice = async() => {
    const check = await dispatch(eventStartCreateDevice({workZoneName, siteName, deviceTypeName, deviceName}));
    if( check ) {
      navigate('/equipos', {replace: true})
    }
  }

  return (

    // <h1>hola</h1>


    <div className="crear__contenedor">
      <h1>Crear Equipo</h1>
      <hr />
      <h6 className="mt-2">Cree/seleccione una <strong>ZONA DE TRABAJO</strong></h6>
      <DataListWZ  />

      <h6 className="mt-2">Cree/Seleccione una <strong>UBICACION</strong></h6>
      <DataListS />

      <h6 className="mt-2">Cree/Seleccione un <strong>TIPO DE EQUIPO</strong></h6>
      <DataListDT  />

      <h6 className="mt-2">Ingrese el nombre del nuevo <strong>EQUIPO</strong></h6>
        <div className="d-flex">
        <input 
          required 
          type="text" 
          className="form-control" 
          placeholder="Ingrese nombre del equipo" 
          onChange={e => setDeviceName(e.target.value)}
        />
        <button 
          className="btn btn-success btn-lg"
          onClick={saveButton}
        ><i className="bi bi-check-lg"></i></button>

      </div>

      <button 
        disabled={false} 
        className="btn btn-secondary btn-lg mt-3"
        onClick={createNewDevice}
      >Crear nuevo equipo</button>

    </div>
  )
}


