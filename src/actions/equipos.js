import {
  useSelector
} from "react-redux";
import {
  fetchConToken
} from "../helpers/fetch";
import {
  types
} from "../types/types";

//Obtencio de Toda la base de datos.
export const startGetAllDevice = () => {
  return async (dispatch) => {
    const myHelp = {
      myHelp: 1
    }
    try {
      const resp = await fetchConToken('devices/getall', myHelp, 'GET');
      const body = await resp.json();

      await dispatch(getAllDevice(body.equipos));
      await dispatch(ArrayWZ(body.equipos));

      return (body.equipos);

    } catch (error) {
      console.log(error)
    }
  }
}
const getAllDevice = (devices) => {
  return {
    type: types.getAllDevices,
    payload: devices
  }
}

//Borrar un equipo...
export const startDeleteDevice = (id) => {
  return async (dispatch) => {

    try {
      const resp = await fetchConToken('devices/delete', {id}, 'POST');
      const body = await resp.json();
      
      if (body.ok) {
        console.log(body.msg);
        await dispatch(startGetAllDevice())
      }

      return (true);

    } catch (error) {
      console.log(error)
    }
  }

}

//Cracion de ARRAY...
export const ArrayWZ = (equipos) => {
  return async (dispatch) => {
    let WZNames = [];
    equipos.map(e => {
      WZNames.push(e.workZoneName);
    });

    const sgArrayProvisorio = new Set(WZNames);
    WZNames = [...sgArrayProvisorio];

    dispatch(createArrayWZ(WZNames));
  }
}
const createArrayWZ = (equipos) => {
  return {
    type: types.filterForWZ,
    payload: equipos
  }
}


export const arraySites = (equipos, workZone) => {
  return async (dispatch) => {
    const arraySites = equipos.filter(e => e.workZoneName === workZone);

    let a = []
    arraySites.map(e => {
      a.push(e.siteName);
    })

    const arrayProvisorio = new Set(a);
    a = [...arrayProvisorio];

    dispatch(createArraySites(a))
  }
}
const createArraySites = (equipos) => {
  return {
    type: types.filterForSite,
    payload: equipos
  }
}


export const arrayDeviceTypes = (equipos, site) => {
  return async (dispatch) => {
    const arrayDeviceType = equipos.filter(e => e.siteName === site);

    let a = [];
    arrayDeviceType.map(e => {
      a.push(e.deviceTypeName);
    })

    const arrayProvisorio = new Set(a);
    a = [...arrayProvisorio];

    dispatch(createArrayDeviceTypes(a))
  }
}
const createArrayDeviceTypes = (equipos) => {
  return {
    type: types.filterForDeviceTypes,
    payload: equipos
  }
}


export const arrayDevices = (equipo, workZoneName, site, deviceType) => {
  return async (dispatch) => {
    const arrayDevices = equipo.filter(e => e.workZoneName === workZoneName && e.siteName === site && e.deviceTypeName === deviceType);

    let a = [];
    arrayDevices.map(e => {
        a.push(e.deviceName);
      }

    )
    dispatch(createArrayDevices(a))
  }
}
const createArrayDevices = (equipos) => {
  return {
    type: types.filterForDevices,
    payload: equipos
  }
}




//Busqeuda del equipo.
export const selectDeviceView = (equipos, deviceName) => {
  return async (dispatch) => {
    try {
      const device = equipos.find(e => e.deviceName === deviceName);
      dispatch(getDevice(device))
    } catch (error) {
      console.log(error)
    }
  }
}
const getDevice = (event) => ({
  type: types.getOneDevice,
  payload: event
})




//!---------------------------------------------------------------------------------------------------------------------
//Seleccion
//estas funciones sirve para poder hacer tareas de segundo plano
export const startPreSelectWZ = (equipos, WZ) => {
  return async (dispatch) => {
    try {
      await dispatch(selectWZ(WZ))
      dispatch(arraySites(equipos, WZ))
    } catch (error) {
      console.log(error)
    }
  }
};
const selectWZ = (WZ) => ({
  type: types.selectWZ,
  payload: WZ,
})


export const startPreSelectSite = (equipos, site) => {
  return async (dispatch) => {
    try {
      await dispatch(selectSite(site))
      await dispatch(arrayDeviceTypes(equipos, site))
    } catch (error) {
      console.log(error)
    }
  }
};
const selectSite = (site) => ({
  type: types.selectSite,
  payload: site,
})


export const startPreDeviceType = (equipos, workZoneName, site, deviceType) => {
  return async (dispatch) => {
    try {
      await dispatch(selectDeviceType(deviceType))
      await dispatch(arrayDevices(equipos, workZoneName, site, deviceType))
    } catch (error) {
      console.log(error)
    }
  }
};
const selectDeviceType = (event) => ({
  type: types.selectDeviceType,
  payload: event,
});


export const startPreDevices = (equipos, device) => {
  return async (dispatch) => {
    try {
      await dispatch(selectDevice(device))
      await dispatch(selectDeviceView(equipos, device))
    } catch (error) {
      console.log(error)
    }
  }
};
const selectDevice = (device) => ({
  type: types.selectDevice,
  payload: device,
});


//!---------------------------------------------------------------------------------------------------------------------
export const startDeviceUpdate = (id, factor, deviceName) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(`devices/updatedate1`, {
        id,
        factor
      }, 'PUT');
      const body = await resp.json();

      if (body.ok) {
        const equiposArray = await dispatch(startGetAllDevice())
        dispatch(selectDeviceView(equiposArray, deviceName));
      }

    } catch (error) {
      console.log(error);
    }
  }
};

export const startDeviceUpdate2 = (id, deviceName, hrsFunc) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken('devices/updatedate2', {
        id,
        hrsFunc
      }, 'PUT');
      const body = await resp.json();

      if (body.ok) {
        const equiposArray = await dispatch(startGetAllDevice())
        dispatch(selectDeviceView(equiposArray, deviceName));
      }
    } catch (error) {
      console.log(error)
    }
  }
}


export const startDeviceUpdate3 = (id, deviceName, horasActuales, horasActualesDay) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken('devices/updatedate4', {
        id,
        horasActuales,
        horasActualesDay
      }, 'PUT');
      const body = await resp.json();
      
      if (body.ok) {
        const equiposArray = await dispatch(startGetAllDevice())
        dispatch(selectDeviceView(equiposArray, deviceName));
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const startDeviceUpdate4 = (id, deviceName, horasUltimoService, horasUltimoServiceDay) => {

  return async (dispatch) => {
    try {
      const resp = await fetchConToken('devices/updatedate3', {
        id,
        horasUltimoService,
        horasUltimoServiceDay
      }, 'PUT');
      const body = await resp.json();

      if (body.ok) {
        const equiposArray = await dispatch(startGetAllDevice())
        dispatch(selectDeviceView(equiposArray, deviceName));
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const startDeviceUpdate5 = (id, deviceName, status) => {

  return async (dispatch) => {
    try {
      const resp = await fetchConToken('devices/updatedate5', {
        id,
        status
      }, 'PUT');
      const body = await resp.json();

      if (body.ok) {
        const equiposArray = await dispatch(startGetAllDevice())
        dispatch(selectDeviceView(equiposArray, deviceName));
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const startDeviceUpdate6 = (id, deviceName, statusObs) => {

  return async (dispatch) => {
    try {
      const resp = await fetchConToken('devices/updatedate6', {
        id,
        statusObs
      }, 'PUT');
      const body = await resp.json();

      if (body.ok) {
        const equiposArray = await dispatch(startGetAllDevice())
        dispatch(selectDeviceView(equiposArray, deviceName));
      }
    } catch (error) {
      console.log(error)
    }
  }
}
