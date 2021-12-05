import React, { Component } from 'react'
import Content from '../../components/API/Content'
import Title from '../../components/API/Header'
import Menu from '../../components/API/Menu'
import Table from '../../components/Home/Table'
import Loader from '../../components/Loader'
import MainMenu from '../../components/MainMenu'

export default class API extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="api">
        <Loader />
        <Title />
        <Menu />
        <Content />
      </div>
    )
  }
}
