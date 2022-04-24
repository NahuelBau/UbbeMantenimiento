import { types } from "../types/types"

const initialState = {
  WZN_toCreate: '',
  SN_toCreate: '',
  DTN_toCreate: '',
  DN_toCreate: '',
}

export const createReducer = (state = initialState, action) => {
  switch (action.type) {
  
    case types.CREATION_SW:
      return {
        ...state,
        WZN_toCreate: action.payload,
      }
    
    case types.CREATION_SN:
      return {
        ...state,
        SN_toCreate: action.payload,
      }

    case types.CREATION_DTN:
      return {
        ...state,
        DTN_toCreate: action.payload,
      }
    
    case types.CREATION_DN:
      return {
        ...state,
        DN_toCreate: action.payload,
      }
      

    default:
      return state
  }
}