import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { createReducer } from './createReducer';
import { equipos } from './equiposReducer';
import { modalReducer } from './modalReducer';



export const rootReducer = combineReducers({
  auth: authReducer,
  create: createReducer,
  equipos: equipos,
  modals: modalReducer,
})