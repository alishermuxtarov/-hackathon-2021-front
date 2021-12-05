import React, { Component } from 'react'
import { FiChevronDown, FiStar } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="menu">
        <div className="menu_left">
          <ul>
            <li>
              <a className="active"> Аудит сайта</a>
            </li>
          </ul>
        </div>
        <div className="menu_right">
          <ul>
            <li>
              <a>
                Данные: все <FiChevronDown size={13} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
