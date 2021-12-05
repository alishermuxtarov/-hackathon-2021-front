import React, { Component } from 'react'
import { FiChevronDown, FiStar, FiSettings, FiRotateCcw } from 'react-icons/fi'
import { TiWorld } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Table from '../../Home/Table'
import Loader2 from '../../Loader2'

const options = {
  chart: {
    type: 'spline',
    height: 230,
  },
  title: {
    text: null,
  },
  series: [
    {
      data: [1, 2, 1, 412, 123, 1, 521, 11, 211, 0, 32, 1],
    },
  ],
}

const options2 = {
  chart: {
    type: 'spline',
    height: 230,
  },
  title: {
    text: null,
  },
  series: [
    {
      data: [100, 2, 1, 412, 123],
    },
  ],
}

const options3 = {
  chart: {
    type: 'spline',
    height: 230,
  },
  title: {
    text: null,
  },
  series: [
    {
      data: [1, 200, 100],
    },
  ],
}

const options4 = {
  chart: {
    type: 'spline',
    height: 230,
  },
  title: {
    text: null,
  },
  series: [
    {
      data: [1, 2, 900],
    },
  ],
}

export default class MetriksContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      select: 1,
    }
  }

  render() {
    return (
      <div className="content">
        <Loader2 />
        <div className="content_header">
          <a href="#">
            academytable.ru
            <FiChevronDown size={16} />
          </a>
          <p>academytable.ru • 86760329</p>
        </div>
        <div className="mm">
          <ul>
            <li>
              <a
                onClick={() => this.setState({ select: 1 })}
                className={this.state.select == 1 ? 'active' : 'n'}
              >
                Аналитика трафика
              </a>
            </li>
          </ul>
        </div>
        {this.state.select == 1 ? (
          <div className="content_main">
            <div
              style={{
                paddingLeft: 18,
                paddingTop: 30,
                fontWeight: 500,
                marginBottom: 10,
              }}
            >
              <p>Диаграммы</p>
            </div>
            <div className="row">
              <div className="chart">
                <div className="chart_top">
                  <p>Аналитика трафика</p>
                </div>
                <HighchartsReact highcharts={Highcharts} options={options} />
              </div>
              <div className="chart">
                <div className="chart_top">
                  <p>Посещения</p>
                </div>
                <HighchartsReact highcharts={Highcharts} options={options2} />
              </div>
              <div className="chart">
                <div className="chart_top">
                  <p>уникальные посетители</p>
                </div>
                <HighchartsReact highcharts={Highcharts} options={options3} />
              </div>
              <div className="chart">
                <div className="chart_top">
                  <p>Страниц / посещение</p>
                </div>
                <HighchartsReact highcharts={Highcharts} options={options4} />
              </div>
            </div>
          </div>
        ) : this.state.select == 2 ? (
          <div>
            <div className="table">
              <table>
                <tr>
                  <th class="pl-15">Проблемы</th>
                  <th>Состояние сайта</th>
                  <th>Ошибки</th>
                </tr>
                <tr>
                  <td class="pl-15">Ошибка 404 или Not Found</td>
                  <td>402.101.0.1:8888</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td class="pl-15">Ошибка 404 или Not Found</td>
                  <td>402.101.0.1:8888</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td class="pl-15">Ошибка 404 или Not Found</td>
                  <td>402.101.0.1:8888</td>
                  <td>1</td>
                </tr>
              </table>
            </div>
          </div>
        ) : this.state.select == 3 ? (
          <div>
            {' '}
            <div className="table">
              <table>
                <tr>
                  <th class="pl-15">Urls</th>
                  <th>Предупреждения</th>
                  <th>Ошибки</th>
                </tr>
                <tr>
                  <td class="pl-15">academytable.ru/home</td>
                  <td>1</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td class="pl-15">academytable.ru/news</td>
                  <td>2</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td class="pl-15">academytable.ru/newspage</td>
                  <td>1</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td class="pl-15">academytable.ru/page</td>
                  <td>2</td>
                  <td>0</td>
                </tr>
              </table>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
