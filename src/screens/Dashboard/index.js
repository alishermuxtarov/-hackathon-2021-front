import React, { Component } from 'react'
import Content from '../../components/Dashboard/Content'
import Table from '../../components/Home/Table'
import MainMenu from '../../components/MainMenu'
import Menu from '../../components/Menu'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="dashboard">
        <MainMenu />
        <Content {...this.props} />
      </div>
    )
  }
}
