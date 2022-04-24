import React from 'react'

export const MyCard_StatusDataOffline = () => {

  const status = true;

  return (
    <>
      <div className="row ">
        <div className="column ">
          {
            status
              ?
              (
                <div className="card_online ">
                  <h3>Estado de datos.</h3>
                  <div className='status-contenedor_online'>
                    <h6>Los datos estan actualizados!</h6>
                  </div>
                </div>
              )

              :
              (<div className="card_offline col-9">
                <h3>Estado de datos.</h3>
                <div className='status-contenedor'>
                  <h6>Tiene <strong>datos pendientes</strong> a subir a la nube.</h6>
                </div>
              </div>)
          }


        </div>
      </div>


    </>
  )
}
