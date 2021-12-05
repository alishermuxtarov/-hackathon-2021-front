import React, { Component } from 'react'
import { FiMenu, FiMessageSquare, FiBell } from 'react-icons/fi'
import { BsFillBellFill } from 'react-icons/bs'
import { AiFillMessage } from 'react-icons/ai'

export default class Title extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="title">
        <p>Блог</p>
      </div>
    )
  }
}
