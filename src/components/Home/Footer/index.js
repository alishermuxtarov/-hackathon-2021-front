import React, { Component } from 'react'
import { FiChevronDown, FiStar } from 'react-icons/fi'
import { TiWorld } from 'react-icons/ti'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="footer">
        <div className="footer_left">
          <ul>
            <li>
              <a href="#">Пользовательское соглашение</a>
            </li>
            <li>
              <a href="#">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="#">Справка</a>
            </li>
            <li>
              <a href="#">Задать вопрос</a>
            </li>
            <li>
              <a href="#">Предложить идею</a>
            </li>
          </ul>
        </div>
        <div className="footer_right">
          <p>© 2021 Epsilon (Open data challenge 2021)</p>
        </div>
      </div>
    )
  }
}
