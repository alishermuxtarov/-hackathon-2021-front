import React, { Component } from 'react'
import { FiMenu, FiMessageSquare, FiBell } from 'react-icons/fi'
import { BsFillBellFill } from 'react-icons/bs'
import { AiFillMessage } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="search">
        <NavLink to="addlink">
          <button>Добавить проект</button>
        </NavLink>
        <input
          onChange={(e) => this.props.onChageText(e)}
          type="text"
          placeholder={'Найти счетчик'}
        />
      </div>
    )
  }
}
