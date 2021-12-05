import React, { Component } from 'react'
import Table from '../../components/Home/Table'
import Loader from '../../components/Loader'
import MainMenu from '../../components/MainMenu'
import Content from '../../components/Settings/Content'
import Menu from '../../components/Settings/Menu'
import Title from '../../components/Title'

export default class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="settings">
        <Loader />
        <Title />
        <Menu />
        <Content />
      </div>
    )
  }
}
