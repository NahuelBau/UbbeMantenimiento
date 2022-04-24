import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { uiOpenModal5, uiOpenModal6 } from '../../../../actions/modal'
import { Modal_5, Modal_6 } from '../../../my_components/Modal/Modal'
import { StatusIndicator } from '../../../my_components/StatusIndicator'

import './EstadoEquipo.css'

export const EstadoEquipo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, statusObs } = useSelector(state => state.equipos.device)

  const regresar = (status) => {
    navigate(-1)
  }

  const openModal5 = () => {
    dispatch(uiOpenModal5())
  }

  const openModal6 = () => {
    dispatch(uiOpenModal6())
  }

  return (
    <div className="constenedor_estado">
      <Modal_5 />
      <Modal_6 />
      <div className="d-grid">
        <h1>Estado del equipo</h1>
        <hr />

        <div className="row">
          <div className='card mt-2 '>
            <div className="d-flex flex-row pt-2">
              <div className="r1 col-12 p-1">
                <div className="row">
                  <h5 onClick={openModal5}><StatusIndicator /></h5>
                </div>
              </div>
            </div>

            <hr />
            <div className="p-3">
              <h5>Observaciones: <i class="bi bi-pencil" onClick={openModal6}></i></h5>
              <h6>{statusObs}</h6>
            </div>

          </div>
          <div className="btn-contenedor mt-5">
            <button className="btn btn-secondary mt-2" onClick={regresar}>Volver al equipo.</button>
          </div>
        </div>

      </div>
    </div>

  )
}
