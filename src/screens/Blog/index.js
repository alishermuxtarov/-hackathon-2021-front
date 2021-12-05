import React, { Component } from 'react'
import Content from '../../components/Blog/Content'
import Title from '../../components/Blog/Header'
import Menu from '../../components/Blog/Menu'
import Table from '../../components/Home/Table'
import Loader from '../../components/Loader'
import MainMenu from '../../components/MainMenu'

export default class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="blog">
        <Loader />
        <Title />
        <Menu />
        <Content />
      </div>
    )
  }
}
