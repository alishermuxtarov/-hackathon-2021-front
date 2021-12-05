import React, { Component } from 'react'
import {
  FiChevronDown,
  FiStar,
  FiPieChart,
  FiRss,
  FiShare2,
  FiUsers,
  FiTrello,
  FiSettings,
  FiArrowLeft,
  FiBatteryCharging,
  FiCodesandbox,
} from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="main_menu">
        <div className="menu_block">
          <ul>
            <li>
              <NavLink to="/home">
                <FiCodesandbox size={15} /> Аудит безопасности
              </NavLink>
            </li>
            <li>
              <NavLink to="/tests">
                <FiBatteryCharging size={15} /> Нагрузочные тесты
              </NavLink>
            </li>
            <li>
              <NavLink to="/metriks">
                <FiShare2 size={15} /> Метрики
              </NavLink>
            </li>
            <li>
              <NavLink to="/audit">
                <FiUsers size={15} /> Аудит трафика
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="menu_block">
          <ul>
            <li>
              <NavLink to="/settings">
                <FiSettings size={15} /> Настройки
              </NavLink>
            </li>
            <li>
              <NavLink to="/welcome">
                <FiArrowLeft size={15} /> Выход
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
