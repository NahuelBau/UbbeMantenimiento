


export const MyTable = () => {




  return (
    <>
      <div className="py-2 tabla">
        <div className="row">
          <div className="col-lg-7 mx-auto bg-white rounded shadow">

            <div className="table-responsive">
              <table className="table table-fixed">
                <thead>
                  <tr>
                    <th scope="col" className="col-1">#</th>
                    <th scope="col" className="col-4">Equipo</th>
                    <th scope="col" className="col-3">Ubicacion</th>
                    <th scope="col" className="col-4">Prox. service. </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="col-1">1</th>
                    <td className="col-4">GND12134</td>
                    <td className="col-3">Salar/Salar1</td>
                    <td className="col-4">23/02/22</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


