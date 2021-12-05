import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FiHome, FiPackage, FiSettings, FiRotateCcw } from 'react-icons/fi'

export default class Code extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: null,
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div className="login">
        <div className="login_form">
          <h3>Epsilon</h3>
          <p>Введите код потверждения</p>
          <br />
          <span>Код</span>

          <input
            onChange={(e) => this.setState({ code: e.target.value })}
            type="text"
          />
          <br />
          <NavLink to={this.state.code == 12345 ? 'home' : 'login'}>
            <button
              onClick={() =>
                this.state.code == 12345
                  ? null
                  : alert('Код был введен неверно')
              }
            >
              Потвердить
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
