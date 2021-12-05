import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FiHome, FiPackage, FiSettings, FiRotateCcw } from 'react-icons/fi'

export default class Welome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div id="mobile_header">
          <NavLink activeClass="active" to="/home" className="logo">
            Epsilon
          </NavLink>
          <h1>Главная</h1>
        </div>
        <div id="navigation">
          <div className="container">
            <NavLink
              activeClass="active"
              to="/home"
              className="logo"
              style={{ fontWeight: 'bold', color: '#2979ff' }}
            >
              Epsilon
            </NavLink>
            <ul className="nav"></ul>
            <a
              href="https://apps.apple.com/uz/developer/shahzod-akhmedov/id1556277207"
              className="button"
              style={{ marginLeft: 10, marginRight: 10 }}
            >
              Получить приглашение на iOS Epsilon beta
            </a>
            <a
              href="/app-release.apk"
              className="button"
              style={{ marginLeft: 10, marginRight: 10 }}
            >
              Скачать приложение (Android)
            </a>
            <NavLink activeClass="active" to="/login" className="button">
              Логин
            </NavLink>
          </div>
        </div>
        <div className="mobile_menu">
          <ul className="nav">
            <li>
              <NavLink activeClass="active" to="/home">
                <FiHome />
              </NavLink>
            </li>
            <li>
              <NavLink activeClass="active" to="/products">
                <FiPackage />
              </NavLink>
            </li>
            {/* <li>
                <NavLink activeClass="active" to="/reviews">
                  Отзывы
                </NavLink>
              </li> */}
          </ul>
        </div>
        <div className="section" id="home">
          <div className="container">
            <div className="content">
              <h1>
                Epsilon <br /> Метрика
              </h1>
              <div className="description">
                Анализ государсвенных IT сервисов и порталов и веб технологии,
                поиск уязвимости и анализ технологии. Более 30+ инструментов
              </div>
              <NavLink to="products" className="more">
                Попробовать бесплатную версию
              </NavLink>

              <div className="contacts">
                <div className="item">
                  <span className="name">Telegram</span>
                  <a
                    href="https://t.me/epsilon"
                    target="_blank"
                    className="link"
                  >
                    @epsilon
                  </a>
                </div>
                <div className="item">
                  <span className="name">Email</span>
                  <a href="mailto:  info@epsilon.uz" className="link">
                    info@epsilon.uz
                  </a>
                </div>
                <div className="item">
                  <span className="name">Телефон</span>
                  <a href="tel:+998971025595" className="link">
                    +998 97 102 55 95
                  </a>
                </div>
              </div>
            </div>
            <div className="art">
              <img
                src={
                  'https://cdn.semrush.com/features/static/redesign/images/features_main.7194f46f954a.svg'
                }
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="section" id="services">
          <div className="container">
            <div className="content">
              <h1>
                Сервисы и <br /> инструменты
              </h1>
              <div className="services">
                <div className="item">
                  <div className="name">Наличие уязвимостей</div>
                  <div className="description">
                    Сканеры уязвимостей (или сканеры защищённости) давно стали
                    обязательными инструментами специалистов по информационной
                    безопасности
                  </div>
                </div>
                <div className="item">
                  <div className="name">Анализ фронтенд библиотек</div>
                  <div className="description">
                    Внешний анализ (FEA) - это «план» для создания инструкции.
                    ВЭД, проводимая на ранней стадии процесса, сэкономит время и
                    деньги.
                  </div>
                </div>
                <div className="item">
                  <div className="name">Битые ссылки</div>
                  <div className="description">
                    Сервис для анализа внешних и внутренних ссылок можно
                    использовать для проверки своего сайта и анализа ссылочной
                    массы конкурентов.
                  </div>
                </div>
                <div className="item">
                  <div className="name">Aнализ открытых портов</div>
                  <div className="description">
                    Проверка открытых портов на компьютере, либо сервере с
                    помощью онлайн сканера. Быстрый port-scanner на базе nmap,
                    показывает все порты.
                  </div>
                </div>
              </div>
            </div>
            <div className="art">
              <img
                src={require('../../assets/img/arts/services.svg').default}
                alt="realsoft"
              />
            </div>
          </div>
        </div>
        <div id="abouts">
          <div className="section" id="about">
            <div className="container">
              <div className="content">
                <h1>
                  Epsilon <br /> Метрика
                </h1>
                <div className="description">
                  Поможет решить проблемы вашего гос проекта
                </div>
                <div className="numbers">
                  <div className="item">
                    <div className="count">10+ Интрументов</div>
                    <span>Инструмент оптимизации содержания</span>
                  </div>
                  <div className="item">
                    <div className="count">10+ Интрументов</div>
                    <span>Инструмент мониторинга PR конкурентов</span>
                  </div>
                  <div className="item">
                    <div className="count">15+ Интрументов</div>
                    <span>Анализ сайта</span>
                  </div>
                </div>
                <div className="numbers">
                  <div className="item">
                    <div className="count">4+ Интрументов</div>
                    <span>Исследование ключевых слов PPC</span>
                  </div>
                  <div className="item">
                    <div className="count">3+ Интрументов</div>
                    <span>Монетизация веб-сайта</span>
                  </div>
                  <div className="item">
                    <div className="count">2+ Интрументов</div>
                    <span>Отслеживание рангов</span>
                  </div>
                </div>
              </div>
              <div className="art">
                <img
                  src={require('../../assets/img/arts/about.svg').default}
                  alt="realsoft"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
