import React, { Component } from 'react'
import { FiChevronDown, FiStar, FiSettings, FiRotateCcw } from 'react-icons/fi'
import { TiWorld } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div
        className="chat_wrapper"
        onClick={() => this.props.chatEventClose()}
        style={{ display: this.props.chat == true ? 'flex' : 'none' }}
      >
        <div className="chat">
          <img
            src="https://i.pinimg.com/originals/bc/b8/13/bcb813a5eddebf61849350d6bc3aa07a.jpg"
            alt=""
          />
          <p>Чат недоступет</p>
        </div>
      </div>
    )
  }
}
