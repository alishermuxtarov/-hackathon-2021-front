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
      data: [256, 312, 328, 345, 522, 1324, 1645, 1752, 1794],
    },
  ],
}

export default class TestContent extends React.Component {
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
            http://bmti.uz
            <FiChevronDown size={16} />
          </a>
          <p>http://bmti.uz • 86760329</p>
        </div>
        <div className="mm">
          <ul>
            <li>
              <a
                onClick={() => this.setState({ select: 1 })}
                className={this.state.select == 1 ? 'active' : 'n'}
              >
                Органические исследования
              </a>
            </li>
          </ul>
        </div>
        {this.state.select == 1 ? (
          <div className="content_main">
            <div className="info">
              <div className="info_item">
                <p>
                  <b>Server Port</b>
                </p>
                <p>443</p>
              </div>
              <div className="info_item">
                <p>
                  <b>Concurrency Level</b>
                </p>
                <p>100</p>
              </div>
              <div className="info_item">
                <p>
                  <b>Time for taken test </b>
                </p>
                <p>2.234s</p>
              </div>
              <div className="info_item">
                <p>
                  <b>Complete request </b>
                </p>
                <p>500</p>
              </div>
            </div>

            <div style={{ paddingLeft: 18, paddingTop: 30, fontWeight: 500 }}>
              <p>Данные</p>
            </div>
            <div className="row-4">
              <div className="item">
                <h2>Total transferrend</h2>
                <p>3612618 bytes</p>
              </div>
              <div className="item">
                <h2>HTML transferrend</h2>
                <p>3581490 bytes</p>
              </div>
              <div className="item">
                <h2>Request per second</h2>
                <p>213.98 ms</p>
              </div>
              <div className="item">
                <h2>Time per request</h2>
                <p>468.342 ms</p>
              </div>
              <div className="item">
                <h2>Transfer rata</h2>
                <p>1510.21 Kb</p>
              </div>
            </div>
            <div
              style={{
                paddingLeft: 18,
                paddingTop: 30,
                fontWeight: 500,
                marginBottom: 10,
              }}
            >
              <p>Persenteg of the request</p>
            </div>
            <div className="row">
              <div className="chart_w100">
                <div className="chart_top">
                  <p>Сканирование</p>
                </div>
                <HighchartsReact highcharts={Highcharts} options={options} />
              </div>
            </div>
            <div className="table">
              <table>
                <tr>
                  <th class="pl-15">Prosses</th>
                  <th>296</th>
                </tr>
                <tr>
                  <td class="pl-15">Processing</td>
                  <td>109 ms</td>
                </tr>
                <tr>
                  <td class="pl-15">Waiting</td>
                  <td>70 ms</td>
                </tr>
                <tr>
                  <td class="pl-15">Total</td>
                  <td>405 ms</td>
                </tr>
              </table>
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
