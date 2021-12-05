import React, { Component } from 'react'
import { FiChevronDown, FiStar } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      check: 1,
      check_1: 1,
      check_2: 1,
      check_3: 0,
    }
  }

  render() {
    return (
      <div className="content_settings">
        <div className="item">
          <div className="item_left">
            <h3>Рекомендации и советы</h3>
            <p>
              Подсказки по настройкам именно для ваших сайтов и <br /> счетчиков
              — помогут и новичкам, и опытным пользователям
            </p>
          </div>
          <div className="item_left">
            <div
              onClick={() => this.setState({ check_1: !this.state.check_1 })}
              className={
                this.state.check_1 == 1 ? 'checkbox_active' : 'checkbox'
              }
            >
              <div
                className={
                  this.state.check_1 == 1
                    ? 'checkbox_status_active'
                    : 'checkbox_status'
                }
              ></div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item_left">
            <h3>Новые возможности Метрики</h3>
            <p>
              Анонсы новых отчетов и функций, обучающие статьи и видео, <br />
              приглашения на мероприятия
            </p>
          </div>
          <div className="item_left">
            <div
              onClick={() => this.setState({ check: !this.state.check })}
              className={this.state.check == 1 ? 'checkbox_active' : 'checkbox'}
            >
              <div
                className={
                  this.state.check == 1
                    ? 'checkbox_status_active'
                    : 'checkbox_status'
                }
              ></div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item_left">
            <h3>Изменения в API Метрики</h3>
            <p>Оповещения об изменениях в работе Reporting API и Logs API</p>
          </div>
          <div className="item_left">
            <div
              onClick={() => this.setState({ check_2: !this.state.check_2 })}
              className={
                this.state.check_2 == 1 ? 'checkbox_active' : 'checkbox'
              }
            >
              <div
                className={
                  this.state.check_2 == 1
                    ? 'checkbox_status_active'
                    : 'checkbox_status'
                }
              ></div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item_left">
            <h3>Предложения от других сервисов для бизнеса</h3>
            <p>Советы, как повысить отдачу</p>
          </div>
          <div className="item_left">
            <div
              onClick={() => this.setState({ check_3: !this.state.check_3 })}
              className={
                this.state.check_3 == 1 ? 'checkbox_active' : 'checkbox'
              }
            >
              <div
                className={
                  this.state.check_3 == 1
                    ? 'checkbox_status_active'
                    : 'checkbox_status'
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
