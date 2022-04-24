import React from 'react'
import { MyCard } from '../../my_components/MyCard_Print-data'
import { MyTable } from '../../my_components/MyTable'

import './Resumen.css'

export const Resumen = () => {
  return (
    <div>
      <h1>Resumen</h1>
      <div>
        <MyTable />
        <MyCard titulo={'Obtencion de datos'} />

      </div>
    </div>
  )
}
