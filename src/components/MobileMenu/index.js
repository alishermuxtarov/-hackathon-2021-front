import React, { Component } from 'react'
import { FiChevronDown, FiStar, FiSettings, FiRotateCcw } from 'react-icons/fi'
import { TiWorld } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class MobileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div
        className="chat_wrapper"
        style={{ display: this.props.menu == true ? 'flex' : 'none' }}
      >
        <div className="menu_mobile">
          <div className="menu_header">
            <p>Меню</p>
          </div>
          <ul>
            <li>
              <NavLink to="home" onClick={() => this.props.menuEventClose()}>
                Счетчики
              </NavLink>
            </li>
            <li>
              <NavLink
                to="settings"
                onClick={() => this.props.menuEventClose()}
              >
                Настройка аккаунта
              </NavLink>
            </li>
            <li>
              <NavLink to="api" onClick={() => this.props.menuEventClose()}>
                API
              </NavLink>
            </li>
            <li>
              <NavLink to="blog" onClick={() => this.props.menuEventClose()}>
                Блог
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="close_menu"
          onClick={() => this.props.menuEventClose()}
        ></div>
      </div>
    )
  }
}
