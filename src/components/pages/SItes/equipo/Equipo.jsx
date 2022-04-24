import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import moment from 'moment';

import { uiOpenModal1, uiOpenModal2, uiOpenModal3, uiOpenModal4 } from '../../../../actions/modal';
import { Modal_1, Modal_2, Modal_3, Modal_4 } from '../../../my_components/Modal/Modal';
import './equipo.css'
import { startDeleteDevice } from '../../../../actions/equipos';
import { StatusIndicator } from '../../../my_components/StatusIndicator';

export const Equipo = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  moment().format();
  const { device } = useSelector(state => state.equipos);
  
  const { 
    workZoneName, 
    siteName, 
    deviceName, 
    factor, 
    hrsFunc, 
    horasUltimoService, 
    horasUltimoServiceDay,
    horasActuales,
    horasActualesDay,
    _id
    } = device;

  let horasActualesFormatDay = moment(horasActualesDay).add(1,'d').format('DD/MM/yy')
  let horasUltimoServiceDayFormat = moment(horasUltimoServiceDay).add(1,'d').format('D/MM/y')



  const openModal1 = () => {
    dispatch(uiOpenModal1())
  }

  const openMoldal2 = () => {
    dispatch(uiOpenModal2())
  }

  const openModal3 = () => {
    dispatch(uiOpenModal3())
  }

  const openModal4 = () => {
    console.log('openMoldal4');
    dispatch(uiOpenModal4())
  }

  const borrarEquipo = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-2',
        cancelButton: 'btn btn-danger m-2',
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      text: `¿Está seguro de borrar el equipo ${deviceName}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si.',
      cancelButtonText: 'No.',
      reverseButtons: true,
      padding: '',
      width: 250,
    }).then((result) => {
      if (result.isConfirmed) {
        const resp = dispatch(startDeleteDevice(_id))
        if(resp){
          navigate('/equipos', {replace: true})
          swalWithBootstrapButtons.fire({
            icon: 'success',
            title: 'El equipo fue eliminado',
            timer: 3000 ,
            position: 'top',
            toast: true,
            showConfirmButton: false,
            timerProgressBar: true,
          })
        }
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
      }
    })
  }

  const status =  () => {
    navigate('/equipos/equipo/status');
  }
  
  


  return (
    <div className="d-grid">
      <button className="btn btn-danger btn-sm col-2 mx-auto" onClick={borrarEquipo}><i class="bi bi-trash"></i></button>
      <Modal_1 />
      <Modal_2 />
      <Modal_3 />
      <Modal_4 />


      <div className="card mt-2 pb-3">
        <div className="row">
          <div className='col-6'>
            <div className='card mt-2'>
              <div className="d-flex flex-column mb-2">
                <span className="muted-text">Zona de trabajo</span>
                <span className="font-weight-bold">{workZoneName}</span>
              </div>
              <div className="d-flex flex-column mb-2">
                <span className="muted-text">Ubicacion</span>
                <span className="font-weight-bold">{siteName}</span>
              </div>

              <div className="d-flex flex-column mb-2">
                <span className="muted-text">Nombre del Equipo</span>
                <span className="font-weight-bold">{deviceName}</span>
              </div>
            </div>
            <div className='card mt-2' onClick={openModal1}>

              <div className="d-flex flex-column mb-2">
                <span className="muted-text">Intervalo de service: </span>
                <span className="font-weight-bold ">{factor} horas.</span>
              </div>
            </div>

            <div className='card mt-2' onClick={openMoldal2}>
              <div className="d-flex flex-column mb-2">
                <span className="muted-text">Horas de funcionamiento por dia: </span>
                <span className="font-weight-bold">{hrsFunc} horas.</span>
              </div>
            </div>


          </div>
          
          <div className='col-6'>
            <h2></h2>
            <div className='card' onClick={openModal3}>
              <div className="d-flex flex-column mb-2">
                <h6>Datos Actuales </h6>
                
                <span className="muted-text">Horas</span>
                <span className="font-weight-bold"> {horasActuales}</span>
              </div>
              <div className="d-flex flex-column mb-2">
                <span className="muted-text">Fecha </span>
                <span className="font-weight-bold">{horasActualesFormatDay}</span>
              </div>
            </div>

            <div className='card mt-2' onClick={openModal4}>
              <div className="d-flex flex-column mb-2" >
                <h6>Datos del ultimo service </h6>
                <span className="muted-text">Horas</span>
                <span className="font-weight-bold">{horasUltimoService}</span>
              </div>
              <div className="d-flex flex-column mb-2">
                <span className="muted-text">Fecha</span>
                <span className="font-weight-bold">{horasUltimoServiceDayFormat}</span>
              </div>
            </div>


            <div className="d-flex p-2  mt-2 containerDaysLeft card " onClick={status}>
              <StatusIndicator />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
