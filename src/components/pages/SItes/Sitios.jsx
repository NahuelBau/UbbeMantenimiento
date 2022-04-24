import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { startGetAllDevice } from '../../../actions/equipos'
import { SelectDeviceType, SelectDevive, SelectSite, SelectWorkZone } from '../../my_components/MySelect2'

import './Sites.css'


export const Sitios = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetAllDevice());
  }, []);

  return (
    <div className="contenedor_equipos">
      <h1>Equipos</h1>
      <hr />
      <div className="contenedor_select row">

        <div className=" mt-2">
          <h6>Seleccione una <strong>ZONA DE TRABAJO.</strong></h6>
          <SelectWorkZone />
        </div>

        <div className="mt-2">
          <h6>Seleccione un <strong>LUGAR.</strong></h6>
          <SelectSite />
        </div>

        <div className=" mt-2">
          <h6>Seleccione un <strong>TIPO DE EQUIPO</strong></h6>
          <SelectDeviceType />
        </div>

        <div className=" mt-2">
          <h6>Seleccione un <strong>UN EQUIPO</strong></h6>
          <SelectDevive />
        </div>
      </div>
      
      <div className="btn-contenedor">
        <NavLink
          className="btn btn-secondary btn-lg mt-2"
          to={'/equipos/equipo'}
        >Siguiente</NavLink>
      </div>
    </div>
  )
}
