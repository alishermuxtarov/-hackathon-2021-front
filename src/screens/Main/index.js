import React, { Component } from 'react'
import Table from '../../components/Home/Table'
import Loader from '../../components/Loader'
import Menu from '../../components/Menu'
import Search from '../../components/Search'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search_text: '',
    }
  }

  onChageText(e) {
    this.setState({ search_text: e.target.value })
  }

  render() {
    return (
      <div style={{ flex: 1, marginLeft: 230 }}>
        <Search
          onChageText={this.onChageText.bind(this)}
          search_text={this.state.search_text}
        />
        <Menu />
        <Table search_text={this.state.search_text} />
      </div>
    )
  }
}
