import React, { Component } from 'react'
import { FiChevronDown, FiStar, FiSettings, FiRotateCcw } from 'react-icons/fi'
import { TiWorld } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class Notification extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div
        className="chat_wrapper"
        onClick={() => this.props.notificationEventClose()}
        style={{ display: this.props.notification == true ? 'flex' : 'none' }}
      >
        <div className="chat">
          <img
            src="https://cdn.dribbble.com/users/1373705/screenshots/6457914/no_notification_yiran.png?compress=1&resize=400x300"
            alt=""
          />
          <p>У вас нет новых уведомлений</p>
        </div>
      </div>
    )
  }
}
