export const types = {

  //? Parte de AUTH
  authCheckinFinish: '[AUTH] Checkin login state finish',
  authstartLogin: '[AUTH] Start login',
  authLogin: '[AUTH] Login',
  authStartRegister: '[AUTH] Auth',
  authStartTokenRenwe: '[AUTH] Start Token renew',
  authLogout: '[AUTH] Logout',

  //? Parte de creacion de equipos

  CREATION_SW: '[CREATE] Seleccion de SW',
  CREATION_SN: '[CREATE] Seleccion de SiteName',
  CREATION_DTN: '[CREATE] Seleccion de DeviceTypeName',
  CREATION_DN: '[CREATE] Seleccion DeviceName',

  startDeviceCreate: '[START] Comienzo de creacion de un nuevo equipo',
  deviceCreate: '[Create] Crear un nuevo equipo',

  //? Equipos V2 Experimental         
  getAllDevices: '[OBTENER] Obtener todos los equipos',

  filterForWZ: '[FILTRO] Filtrar WZ',
  filterForSite: '[FILTRO] Filtrar por sitios Segun el WZ',
  filterForDeviceTypes: '[FILTRO] Filtrar por DeviceTypes Segun el Site y el WZ',
  filterForDevices: '[FILTRO] Filtrar por Devices Segun el Site, el WZ y el DeviceType',
  getOneDevice: '[FILTRO] Obtener un equipo',

  //? Seleccion de equipos
  selectWZ: '[SELECT] Seleccionar WorkZone',
  selectSite: '[SELECT] Seleccionar Site',
  selectDeviceType: '[SELECT] Seleccionar DeviceType',
  selectDevice: '[SELECT] Seleccionar Device',


  //? Modals                     
  uiOpenModal1: 'uiOpenModal1',
  uiOpenModal2: 'uiOpenModal2',
  uiOpenModal3: 'uiOpenModal3',
  uiOpenModal4: 'uiOpenModal4',
  uiOpenModal5: 'uiOpenModal5',
  uiOpenModal6: 'uiOpenModal6',

  uiCloseModal1: 'uiCloseModal1',
  uiCloseModal2: 'uiCloseModal2',
  uiCloseModal3: 'uiCloseModal3',
  uiCloseModal4: 'uiCloseModal4',
  uiCloseModal5: 'uiCloseModal5',
  uiCloseModal6: 'uiCloseModal6',

  
}