import moment from 'moment';
import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { startDeviceUpdate, startDeviceUpdate2, startDeviceUpdate3, startDeviceUpdate4, startDeviceUpdate5, startDeviceUpdate6 } from '../../../actions/equipos';
import { uiCloseModal1, uiCloseModal2, uiCloseModal3, uiCloseModal4, uiCloseModal5, uiCloseModal6 } from '../../../actions/modal';
import { SelectStatus } from '../MySelect2';

import './modalStyle.css'

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

//?                  Modals                      
// ----------------------------------------
//  Modal para la agregar el factor de cambio
//                 de cosas 
// ----------------------------------------
export const Modal_1 = () => {
  const { modalOpen1 } = useSelector(state => state.modals);
  const dispatch = useDispatch();

  const [hrsFactor, setHrsFactor] = useState(null);

  const { _id, factor, deviceName } = useSelector(state => state.equipos.device);


  const modalClose = () => {
    dispatch(uiCloseModal1())
  }

  const updateData = async () => {
    dispatch(startDeviceUpdate(_id, hrsFactor, deviceName));
    modalClose();
  }


  return (
    <Modal
      isOpen={modalOpen1}
      onRequestClose={modalClose}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      closeTimeoutMS={200}
      overlayClassName="modal-fondo"
    >
      <div className="container">

        <div className="row">
          <h1 className="form-group mb-3 col-12">Actualizar Intervalo de service</h1>
          <hr />

          <div className="row" >

            <div className="col-6">
              <div className="form-group flex-column  d-flex mb-2">

                <label className="mb-2">Nuevo Intervalo de service (hrs)</label>

                <input
                  className="form-control  col-6 mb-2"
                  type="number"
                  placeholder="..."
                  onChange={e => setHrsFactor(e.target.value)}
                />

              </div>

            </div>

            <div className="form-group col-6 mb-2">
              <h3>Datos Actuales</h3>
              <label> Horas</label>
              <h4>{factor} hrs</h4>
            </div>

          </div>

        </div>

        <button disabled={!hrsFactor} className="btn btn-secondary col-12 " onClick={updateData} >Guardar</button>
      </div>
    </Modal>

  )

}


// ----------------------------------------
//  Modal para la horas de uso por dia 
// ----------------------------------------
export const Modal_2 = () => {
  const { modalOpen2 } = useSelector(state => state.modals);
  const dispatch = useDispatch();

  const { _id, hrsFunc, deviceName } = useSelector(state => state.equipos.device);

  const [hrsDia, setHrsDia] = useState(null);


  const updateData = () => {
    dispatch(startDeviceUpdate2(_id, deviceName, hrsDia));
    closeModal();
  };


  const closeModal = () => {
    dispatch((uiCloseModal2()))
  }

  return (
    <Modal
      isOpen={modalOpen2}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      closeTimeoutMS={200}
      overlayClassName="modal-fondo"
    >
      <div className="container">

        <div className="row">
          <h1 className="form-group mb-2 col-12">Actualizar horas de uso por dia</h1>
          <hr />

          <div className="row" >

            <div className="col-6">
              <div className="form-group flex-column  d-flex mb-2">

                <label>Nueva hora</label>
                <input
                  className="form-control  col-6 mb-2"
                  type="number"
                  placeholder="..."
                  onChange={e => setHrsDia(e.target.value)}
                />

              </div>

            </div>

            <div className="form-group col-6 mb-2">
              <h3>Datos Actuales</h3>
              <label>Horas</label>
              <h4>{hrsFunc} hrs</h4>
            </div>

          </div>

        </div>
        <button disabled={!hrsDia} className="btn btn-secondary col-12" onClick={updateData}>Guardar</button>
      </div>
    </Modal>

  )
};

// ----------------------------------------
//  Modal para Horas de uso actuales
// ----------------------------------------
export const Modal_3 = () => {

  const { modalOpen3 } = useSelector(state => state.modals);

  const { _id, horasActuales, horasActualesDay, deviceName } = useSelector(state => state.equipos.device);
  const horasActualesFormatDay = moment(horasActualesDay).format('DD/MM')


  const dispatch = useDispatch();

  const [hrs, setHrs] = useState(null);
  const [day, setDay] = useState(null);


  const closeModal = () => {
    dispatch((uiCloseModal3()))
  }

  const updateData = () => {
    dispatch(startDeviceUpdate3(_id, deviceName, hrs, day))
    closeModal()
  }


  return (
    <Modal
      isOpen={modalOpen3}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      closeTimeoutMS={200}
      overlayClassName="modal-fondo"
    >
      <div className="container">

        <div className="row">
          <h3 className="form-group mb-2 col-12">Actualizar horas de uso</h3>

          <div className="row" >

            <div className="col-6">
              <div className="form-group flex-column  d-flex mb-2">

                <label>Nueva hora</label>
                <input
                  className="form-control  col-6 mb-2"
                  type="number"
                  placeholder="..."
                  onChange={e => setHrs(e.target.value)}
                />
                <label>Dia</label>
                <input
                  className="form-control  col-6 mb-2"
                  type="date"
                  placeholder="..."
                  onChange={e => setDay(e.target.value)}
                />

              </div>

            </div>

            <div className="form-group col-6 mb-2">
              <h6>Datos Actuales</h6>
              <label> Horas</label>
              <h5>{horasActuales} hrs</h5>
              <label> Fecha</label>
              <h5>{horasActualesFormatDay}</h5>
            </div>

          </div>

        </div>
        <button disabled={!day || !hrs} className="btn btn-secondary col-12" onClick={updateData}>Guardar</button>
      </div>
    </Modal>

  )
}


// ----------------------------------------
//  Modal para la actualizar Ultimo service
// ----------------------------------------
export const Modal_4 = () => {

  const { modalOpen4 } = useSelector(state => state.modals);
  const { _id, horasUltimoService, horasUltimoServiceDay, deviceName } = useSelector(state => state.equipos.device);
  const horasUltimoServiceDayFormat = moment(horasUltimoServiceDay).format('DD/MM')


  const [hrs, setHrs] = useState(null);
  const [day, setDay] = useState(null);


  // const ultimoServiceDayFormat = moment(horasUltimoServiceDay).format('DD/MM')
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch((uiCloseModal4()))
  }

  const updateData = () => {
    dispatch(startDeviceUpdate4(_id, deviceName, hrs, day))
    closeModal();
  }


  return (
    <Modal
      isOpen={modalOpen4}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      closeTimeoutMS={200}
      overlayClassName="modal-fondo"
    >
      <div className="container">

        <div className="row">
          <h1 className="form-group mb-2 col-12 mb-4">Actualizar horas del ultimo service</h1>

          <div className="row" >

            <div className="col-6">
              <div className="form-group flex-column  d-flex mb-2">

                <label>Nueva hora</label>
                <input
                  className="form-control  col-6 mb-2"
                  type="number"
                  placeholder="..."
                  onChange={e => setHrs(e.target.value)}
                />
                <label>Dia</label>
                <input
                  className="form-control  col-6 mb-2"
                  type="date"
                  placeholder="..."
                  onChange={e => setDay(e.target.value)}
                />

              </div>

            </div>

            <div className="form-group col-6">
              <h4>Datos Actuales</h4>
              <label> Horas: </label>
              <h4>{horasUltimoService} horas</h4>
              <label> Dia: </label>
              <h4>{horasUltimoServiceDayFormat}</h4>
            </div>

          </div>

        </div>
        <button disabled={!day || !hrs} className="btn btn-secondary col-12" onClick={updateData} >Guardar</button>
      </div>
    </Modal>
  )
}


// ----------------------------------------
//  Modal para la actualizar Status 
// ----------------------------------------
export const Modal_5 = () => {

  const { modalOpen5 } = useSelector(state => state.modals);
  const { _id, deviceName } = useSelector(state => state.equipos.device);
  const [newStatus, setNewStatus] = useState(null);


  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch((uiCloseModal5()))
  }

  // const updateData = () => {
  //   // dispatch(startDeviceUpdate4(_id, deviceName, hrs, day))
  //   dispatch(startDeviceUpdate5(_id, deviceName, newStatus))
  //   closeModal();
  // }


  return (
    <Modal
      isOpen={modalOpen5}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      closeTimeoutMS={200}
      overlayClassName="modal-fondo"
    >
      <div className="container">
        <div className="d-block">
          <div className="row" >
            <div className="col-12 ">
              <div className="mb-2 ">
                <SelectStatus />
              </div>
            </div>
          </div>
        </div>
        {/* <button disabled={!day || !hrs} className="btn btn-secondary col-12" onClick={updateData} >Guardar</button> */}
      </div>
    </Modal>
  )
}

// ----------------------------------------------
//  Modal para la actualizar Status_observaciones
// ----------------------------------------------
export const Modal_6 = () => {

  const { modalOpen6 } = useSelector(state => state.modals);
  const { _id,  deviceName } = useSelector(state => state.equipos.device);



  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch((uiCloseModal6()))
  }

  const [obs, setObs] = useState(null);

  const observaciones = (e) => {
    setObs(e.target.value)
  }


  const updateData = () => {
    dispatch(startDeviceUpdate6(_id, deviceName, obs))
    closeModal();
  }




  return (
    <Modal
      isOpen={modalOpen6}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      closeTimeoutMS={200}
      overlayClassName="modal-fondo"
    >
      <div className="container">

        <div className="row">
          <h1 className="col-12 ">Actualizar observaciones</h1>

          <div className="row" >

            <div class="form-floating">
              <textarea class="form-control text-area-custom mb-2" placeholder="Escriba las observaciones..." id="floatingTextarea" onChange={observaciones}></textarea>
              <label for="floatingTextarea">Observaciones</label>
            </div>

          </div>

        </div>
        <button disabled={!obs} className="btn btn-secondary col-12" onClick={updateData} >Actualizar</button>
      </div>
    </Modal>
  )
}



