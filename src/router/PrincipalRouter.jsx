import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Online, Offline } from 'react-detect-offline'




import { Crear } from '../components/pages/Crear/Crear'
import { Lobby } from '../components/pages/Lobby/Lobby'
import { Resumen } from '../components/pages/Resumen/Resumen'
import { Equipo } from '../components/pages/SItes/equipo/Equipo'
import { EstadoEquipo } from '../components/pages/SItes/equipo/EstadoEquipo'
import { Sitios } from '../components/pages/SItes/Sitios'
import { NavBot } from '../components/ui/navbar_botom/NavBot'


import './PrincipalRouter.css'

export const PrincipalRouter = () => {

  return (
    <div>

      <NavBot />
      <div className="contenedor_principal">
        <div className="contenedor_contenido">
          <div className='contenedor-status-conection mb-1 '>
            <Offline>
              <div className="offline_contenedor"><h6>Aplicacion sin acceso a la red. </h6></div>
            </Offline>
            <Online>
              <div className="online_contenedor"><h6>Aplicacion conectada a la red. </h6></div>
            </Online>
          </div>
          <div className="contenedor_contenido_children mt-2">
            <Routes>

              <Route path='/' element={<Lobby />} />
              <Route path='/crearequipo' element={<Crear />} />
              <Route path='/equipos' element={<Sitios />} />
              <Route path='/equipos/equipo' element={<Equipo />} />
              <Route path='/equipos/equipo/status' element={<EstadoEquipo />} />
              <Route path='/resumen' element={<Resumen />} />

            </Routes>
          </div>
        </div>
      </div>

    </div>
  )
}
