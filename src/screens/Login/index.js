import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FiHome, FiPackage, FiSettings, FiRotateCcw } from 'react-icons/fi'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: null,
      password: null,
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div className="login">
        <div className="login_form">
          <h3>Epsilon</h3>
          <p>Войдите, чтобы продолжить</p>
          <br />
          <span>Login</span>

          <input
            type="text"
            onChange={(e) => this.setState({ login: e.target.value })}
          />
          <br />
          <span>Password</span>

          <input
            onChange={(e) => this.setState({ password: e.target.value })}
            type="text"
          />
          <br />
          <NavLink
            to={
              this.state.login !== 'admin' || this.state.password !== '12345'
                ? 'login'
                : 'home'
            }
          >
            <button
              onClick={() =>
                this.state.login !== 'admin' || this.state.password !== '12345'
                  ? alert('Логин или пароль введен неправильно')
                  : 'home'
              }
            >
              Войти
            </button>
          </NavLink>
          <div className="login_bottom2">
            <NavLink to="register">Зарегестрироваться</NavLink>
          </div>
          <div className="login_bottom">Анализ государсвенных IT сервисов</div>
        </div>
      </div>
    )
  }
}
