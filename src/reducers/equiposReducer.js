
import { types } from "../types/types";

const initialState = {
  equipos: null, 

  WZAvalible: [],
  SiteAvalible: [],
  DeviceTypeAvalible: [],
  DeviceAvalible: [],

  equiposOrdenados: [],

  WZSelected: null,
  SiteSelected: null,
  DeviceTypeSelected: null,
  DeviceSelected: null,

  device:null,

}




export const equipos = (state = initialState, action) => {
  switch (action.type) {

    case types.getAllDevices:
      return{
        ...state,
        equipos:[...action.payload]
      }
    
    case types.filterForWZ:
      return{
        ...state,
        WZAvalible:action.payload
      }
    
    case types.filterForSite:
      return{
        ...state,
        SiteAvalible:action.payload
      }

    case types.filterForDeviceTypes:
      return{
        ...state,
        DeviceTypeAvalible:action.payload
      }

    case types.filterForDevices:
      return{
        ...state,
        DeviceAvalible:action.payload
      }
    
    case types.selectWZ:
      return{
        ...state,
        WZSelected:action.payload
      }
    
    case types.selectSite:
      return{
        ...state,
        SiteSelected:action.payload
      }

    case types.selectDeviceType:
      return{
        ...state,
        DeviceTypeSelected:action.payload
      }
    
    case types.selectDevice:
      return{
        ...state,
        DeviceSelected:action.payload
      }
    
    case types.getOneDevice:
      return{
        ...state,
        device:action.payload
      }
  
    default:
      return state
  }
}


