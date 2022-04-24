import React from 'react'
import { MyCard } from '../../my_components/MyCard_Print-data'

import './Resumen.css'

export const Resumen = () => {
  return (
    <div>
      <h1>Resumen</h1>
      <div>

        <div class="py-2 tabla">
          <div class="row">
            <div class="col-lg-7 mx-auto bg-white rounded shadow">

              <div class="table-responsive">
                <table class="table table-fixed">
                  <thead>
                    <tr>
                      <th scope="col" class="col-1">#</th>
                      <th scope="col" class="col-4">Equipo</th>
                      <th scope="col" class="col-3">Ubicacion</th>
                      <th scope="col" class="col-4">Prox. service. </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="col-1">1</th>
                      <td class="col-4">GND12134</td>
                      <td class="col-3">Salar/Salar1</td>
                      <td class="col-4">23/02/22</td>
                    </tr>
                    <tr>
                      <th scope="row" class="col-1">2</th>
                      <td class="col-4">MBB500-002</td>
                      <td class="col-3">Laboratorio</td>
                      <td class="col-4">04/03/22</td>
                    </tr>
                    <tr>
                      <th scope="row" class="col-1">2</th>
                      <td class="col-4">MBB500-002</td>
                      <td class="col-3">Laboratorio</td>
                      <td class="col-4">04/03/22</td>
                    </tr>                  <tr>
                      <th scope="row" class="col-1">2</th>
                      <td class="col-4">MBB500-002</td>
                      <td class="col-3">Laboratorio</td>
                      <td class="col-4">04/03/22</td>
                    </tr>                  <tr>
                      <th scope="row" class="col-1">2</th>
                      <td class="col-4">MBB500-002</td>
                      <td class="col-3">Laboratorio</td>
                      <td class="col-4">04/03/22</td>
                    </tr>                  <tr>
                      <th scope="row" class="col-1">2</th>
                      <td class="col-4">MBB500-002</td>
                      <td class="col-3">Laboratorio</td>
                      <td class="col-4">04/03/22</td>
                    </tr>
                    <tr>
                      <th scope="row" class="col-1">2</th>
                      <td class="col-4">MBB500-002</td>
                      <td class="col-3">Laboratorio</td>
                      <td class="col-4">04/03/22</td>
                    </tr>                  <tr>
                      <th scope="row" class="col-1">2</th>
                      <td class="col-4">MBB500-002</td>
                      <td class="col-3">Laboratorio</td>
                      <td class="col-4">04/03/22</td>
                    </tr>                  <tr>
                      <th scope="row" class="col-1">2</th>
                      <td class="col-4">MBB500-002</td>
                      <td class="col-3">Laboratorio</td>
                      <td class="col-4">04/03/22</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
        <MyCard titulo={'Obtencion de datos'} />

      </div>
    </div>
  )
}
