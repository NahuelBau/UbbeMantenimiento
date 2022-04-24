import { useDispatch, useSelector } from "react-redux";
// import { arrayDevices, arrayDeviceTypes, arraySites } from "../../actions/equipos__V2";
// import {preSelectWZ, preSelectSite, preSelectDeviceType, preSelectDevice} from '../../actions/preSelectd';



export const SelectWorkZone = () => {

  // const {equipos,WZAvalible} = useSelector( state => state.equipos__V2)
  
  // const dispatch = useDispatch();
  // const value1 = (e) =>{
  //   const workZone = (e.target.value);
  //   dispatch( preSelectWZ(workZone) );
  //   dispatch( arraySites(equipos,workZone))
  // }
  

  return (
    <div>
      <select className="form-select" aria-label="Default select example" name="WorkZone" onChange={value1}>
        <option></option>
        {
          WZAvalible.map(WorkZone => <option key={WorkZone} value={WorkZone}>{WorkZone}</option>)
        }
      </select>
    </div>
  )
}

export const SelectSite = () => {
  // const {equipos, SiteAvalible} = useSelector( state => state.equipos__V2)
  // const {site} = useSelector( state => state.preSeleccion );
  
  const dispatch = useDispatch();
  const value = (e) =>{
    const siteValue = (e.target.value);
    // dispatch(preSelectSite(siteValue));
    // dispatch(arrayDeviceTypes(equipos,siteValue));
  }
  
  return (
    <div>
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
  const {equipos, DeviceTypeAvalible} = useSelector( state => state.equipos__V2)
  const {workZone, site} = useSelector( state => state.preSeleccion );

  const dispatch = useDispatch();
  const value = (e) => {
    const deviceType1 = (e.target.value);
    dispatch(preSelectDeviceType(deviceType1));
    dispatch(arrayDevices(equipos, workZone, site, deviceType1));
  }

  return(
    <div>
    <select className="form-select" aria-label="Default select example" onChange={value}>
      
      <option></option>
      {
        DeviceTypeAvalible.map(deviceType => <option key={deviceType} value={deviceType}>{deviceType}</option>)
      }

    </select>
  </div>
  )
}

export const SelectDevive = () => {


  const {DeviceAvalible} = useSelector( state => state.equipos__V2)
  const dispatch = useDispatch();
  const value = (e) =>{
    const device = (e.target.value);
    dispatch(preSelectDevice(device));
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
