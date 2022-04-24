import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startDeviceUpdate5, startPreDevices, startPreDeviceType, startPreSelectSite, startPreSelectWZ } from '../../actions/equipos';
import { uiCloseModal5 } from '../../actions/modal';
import './MySelect2.css'

export const SelectWorkZone = () => {
  const dispatch = useDispatch();
  const {equipos,WZAvalible} = useSelector(state => state.equipos);

  const Select = (e) => {
    const workZone = (e.target.value);
    dispatch( startPreSelectWZ(equipos,workZone) );
  }
  
  return (
    <div className='contenedor_select'>
      <select 
        className="form-select"  
        name="WorkZone" 
        onChange={Select}
        >
        <option></option>
        {
          WZAvalible.map(WorkZone => <option key={WorkZone} value={WorkZone}>{WorkZone}</option>)
        }
      </select>
    </div>
  )
}

export const SelectSite = () => {
  const {equipos, SiteAvalible} = useSelector( state => state.equipos)
  
  const dispatch = useDispatch();
  const value = (e) =>{
    const siteValue = (e.target.value);
    dispatch(startPreSelectSite(equipos,siteValue));
  }
  
  return (
    <div className="">
      <select className="form-select" aria-label="Default select example" onChange={value} >
        <option></option>
        {
          SiteAvalible.map(site => <option key={site} value={site}>{site}</option>)
        }
      </select>
    </div>
  )
}


export const SelectDeviceType = () => {
  const {equipos, DeviceTypeAvalible, WZSelected, SiteSelected} = useSelector( state => state.equipos)
  
  const dispatch = useDispatch();
  const value = (e) =>{
    const deviceType = (e.target.value);
    dispatch(startPreDeviceType(equipos ,WZSelected, SiteSelected, deviceType));
  }
  
  return (
    <div>
      <select className="form-select" aria-label="Default select example" onChange={value} >
        <option></option>
        {
          DeviceTypeAvalible.map(DeviceType => <option key={DeviceType} value={DeviceType}>{DeviceType}</option>)
        }
      </select>
    </div>
  )
}


export const SelectDevive = () => {

  const {DeviceAvalible, equipos} = useSelector( state => state.equipos)
  const dispatch = useDispatch();
  const value = (e) =>{
    const device = (e.target.value);
    dispatch(startPreDevices(equipos,device));
  }
  
  return(
    <div>
    <select className="form-select" aria-label="Default select example" onChange={value}>
      <option></option>
      {
        DeviceAvalible.map( device => <option key={device} value={device}>{device}</option> )
      }
    </select>
  </div>
  )
}



export const SelectStatus = () => {
  const dispatch = useDispatch();

  const { _id, deviceName } = useSelector(state => state.equipos.device);
  const {equipos} = useSelector( state => state.equipos)
  
  const [newState, setNewState] = useState(null)
  
  const value = (e) =>{
    setNewState(e.target.value);
  }

  const updateStatus = () => {
    dispatch(startDeviceUpdate5(_id, deviceName, newState));
    dispatch((uiCloseModal5()))
  }
  
  return(
    <div className="d-flex m-2">
    <select className="form-select m-2 form-select-lg" aria-label="Default select example" onChange={value}>
      <option></option>
      <option>OK.</option>
      <option>Con observaciones.</option>
      <option>Fuera de servicio. </option>

    </select>
    <button className="btn btn-secondary m-2" onClick={updateStatus}> Guardar</button>
  </div>
  )
}

