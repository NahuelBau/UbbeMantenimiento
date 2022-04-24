import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBot.css'

export const NavBot = () => {
  return (

    <nav className="nav">
      <NavLink className="nav__link" to='/'>
        <span className="nav__icon"><ion-icon name='home-outline'></ion-icon></span>
        <span className="nav__text">Home</span>
      </NavLink>
      <NavLink className="nav__link" to='/equipos'>
        <span className="nav__icon"><ion-icon name='golf-outline'></ion-icon></span>
        <span className="nav__text">Equipos</span>
      </NavLink>
      <NavLink  className="nav__link" to='/crearequipo'>
        <span className="nav__icon"><ion-icon name='create-outline'></ion-icon></span>
        <span className="nav__text">Crear</span>
      </NavLink>
      <NavLink  className="nav__link" to='/resumen'>
        <span className="nav__icon"><ion-icon name='stats-chart-outline'></ion-icon></span>
        <span className="nav__text">Resumen</span>
      </NavLink>
    </nav>
  )
}
