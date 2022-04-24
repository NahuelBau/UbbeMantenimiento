import { types } from "../types/types";

const initialState = {
  modalOpen1: false,
  modalOpen2: false,
  modalOpen3: false,
  modalOpen4: false,
  modalOpen5: false,
  modalOpen6: false,
}

export const modalReducer = (state = initialState, action) => {

  switch (action.type) {
    
    //-------- Modal (1) ---------
    case types.uiOpenModal1:
      return {
        ...state,
        modalOpen1: true,
      }
    case types.uiCloseModal1:
      return {
        ...state,
        modalOpen1: false
      }
    //--------------------------


    //-------- Modal (2) ---------
    case types.uiOpenModal2:
      return {
        ...state,
        modalOpen2: true,
      }
    case types.uiCloseModal2:
      return {
        ...state,
        modalOpen2: false
      }
    //--------------------------


    //-------- Modal (3) ---------
    case types.uiOpenModal3:
        return {
          ...state,
          modalOpen3: true,
      }
    case types.uiCloseModal3:
        return {
          ...state,
          modalOpen3: false
      }
    //--------------------------


    //-------- Modal (4) ---------
    case types.uiOpenModal4:
        return {
          ...state,
          modalOpen4: true,
      }
    case types.uiCloseModal4:
        return {
          ...state,
          modalOpen4: false
      }
    //--------------------------

    //-------- Modal (5) ---------
    case types.uiOpenModal5:
        return {
          ...state,
          modalOpen5: true,
      }
    case types.uiCloseModal5:
        return {
          ...state,
          modalOpen5: false
      }
    //--------------------------

    //-------- Modal (6) ---------
    case types.uiOpenModal6:
        return { 
          ...state,
          modalOpen6: true,
        }
    case types.uiCloseModal6:
        return { 
          ...state,
          modalOpen6: false,
        }
    //--------------------------
  
    default:
      return state;
  }


  
}