import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FiHome, FiPackage, FiSettings, FiRotateCcw } from 'react-icons/fi'

export default class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div className="login">
        <div className="login_form">
          <h3>Epsilon</h3>
          <p>Введите почту</p>
          <br />
          <span>Почта</span>

          <input
            onChange={(e) => this.setState({ email: e.target.value })}
            type="text"
          />
          <br />
          <NavLink to={this.state.email == null ? 'login' : 'code'}>
            <button
              onClick={() =>
                this.state.email == null
                  ? alert('Почта введена неправильно')
                  : 'code'
              }
            >
              Получить код
            </button>
          </NavLink>
          <div className="login_bottom2">
            <NavLink to="login">Вернуться назад</NavLink>
          </div>
          <div className="login_bottom">Анализ государсвенных IT сервисов</div>
        </div>
      </div>
    )
  }
}
