import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Content from '../../components/API/Content'
import Title from '../../components/API/Header'
import Menu from '../../components/API/Menu'
import Table from '../../components/Home/Table'
import Loader from '../../components/Loader'
import MainMenu from '../../components/MainMenu'

export default class AddLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: 'www.buxoro.uz',
    }
  }

  render() {
    return (
      <div className="addlink">
        <h2>Анализ сайта</h2>
        <div className="link_blok">
          <form>
            <input
              type="url"
              required
              pattern="https?://.+.uz"
              title="The URL must be in a uz domain"
              placeholder={'https://'}
              onChange={(e) => this.setState({ url: e.target.value })}
              value={this.state.url}
            />
            <NavLink to="/dashboard/3">
              <button>Анализ</button>
            </NavLink>
          </form>
        </div>
        <p>Например: davbaho.uz</p>
      </div>
    )
  }
}
