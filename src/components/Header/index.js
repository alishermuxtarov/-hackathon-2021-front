import React, { Component } from 'react'
import { FiMenu, FiMessageSquare, FiBell } from 'react-icons/fi'
import { BsFillBellFill } from 'react-icons/bs'
import { AiFillMessage } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="header">
        <div className="header_left">
          {/* <a href="#" onClick={() => this.props.menuEvent()}>
            <FiMenu size={23} />
          </a> */}
          <p class="logo">
            Epsilon<span> Анализ госсайтов</span>
          </p>
        </div>
        <div className="header_center">
          <ul>
            <li>
              <NavLink to="/home">Главная</NavLink>
            </li>
            {/* <li>
              <NavLink to="settings">Настройка аккаунта</NavLink>
            </li> */}
            <li>
              <NavLink to="/api">API</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Блог</NavLink>
            </li>
          </ul>
        </div>
        <div className="header_right">
          <a href="#" onClick={() => this.props.chatEvent()}>
            <AiFillMessage size={21} />
          </a>
          <a href="#" onClick={() => this.props.notificationEvent()}>
            <BsFillBellFill size={21} />
          </a>
          <div className="user">
            <img src="https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-retina-middle" />
            <p>Alex</p>
          </div>
        </div>
      </div>
    )
  }
}
