import React, { Component } from 'react'
import { FiChevronDown, FiStar, FiSettings, FiRotateCcw } from 'react-icons/fi'
import { TiWorld } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Table from '../../Home/Table'
import axios from 'axios'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      select: 1,
      data: {
        title: 'БМТИ',
        hostname: 'http://bmti.uz',
        protocol: 'http',
        homepage_url: 'https://bmti.uz',
        is_available: true,
        has_sitemap_xml: false,
        created_date: '2021-12-05',
        last_modified: '05.12.2021',
        domain_expiration_date: '2022-12-05',
        loading_speed: 4000,
        weight: 9837645,
        tls_version: 'TLSv1.2,ECDHE-RSA-AES256-GCM-SHA384,2048,256',
        os_version: 'Debian 10',
        os_warning: 'Be careful',
        php_version: '7.8',
        php_warning: 'Be careful',
        web_server_version: '9.9',
        web_server_warning: 'Be careful',
        framework_name: 'Wordpress',
        framework_warning: 'Be careful',
        total_links_count: 3000,
        broken_links_count: 248,
        vulnerabilities: [
          {
            site_hostname: 'http://bmti.uz',
            text: 'Be careful 1',
          },
          {
            site_hostname: 'http://bmti.uz',
            text: 'Be careful 2',
          },
        ],
        open_ports: [
          {
            site_hostname: 'http://bmti.uz',
            port: 5432,
            is_critical: false,
            warning_msg: 'Be careful',
          },
          {
            site_hostname: 'http://bmti.uz',
            port: 3036,
            is_critical: false,
            warning_msg: 'Be careful',
          },
        ],
        broken_links: [
          {
            site_hostname: 'http://bmti.uz',
            path: 's-8-marta',
            url: 'http://bmti.uz/s-8-marta',
            http_code: 404,
          },
          {
            site_hostname: 'http://bmti.uz',
            path: 'sportda-mufavvaqtiyatga-erishildi',
            url: 'http://bmti.uz/sportda-mufavvaqtiyatga-erishildi',
            http_code: 404,
          },
        ],
        ab_tests: [
          {
            site_hostname: 'http://bmti.uz',
            results_text:
              'Server Software:        nginx Server Hostname:        www.uz Server Port:            443 SSL/TLS Protocol:       TLSv1.2,ECDHE-RSA-AES256-GCM-SHA384,2048,256 Server Temp Key:        ECDH P-256 256 bits TLS Server Name:        www.uz  Document Path:          / Document Length:        50341 bytes  Concurrency Level:      100 Time taken for tests:   32.470 seconds Complete requests:      500 Failed requests:        0 Total transferred:      25525000 bytes HTML transferred:       25170500 bytes Requests per second:    15.40 [#/sec] (mean) Time per request:       6494.043 [ms] (mean) Time per request:       64.940 [ms] (mean, across all concurrent requests) Transfer rate:          767.68 [Kbytes/sec] received  Connection Times (ms)               min  mean[+/-sd] median   max Connect:       44  121 146.1     54    1051 Processing:   978 5980 1718.5   5974    9950 Waiting:      961 5962 1719.6   5954    9933 Total:       1032 6100 1698.1   6101   10076  Percentage of the requests served within a certain time (ms)   50%   6101   66%   6668   75%   7114   80%   7562   90%   8413   95%   8905   98%   9275   99%   9505  100%  10076 (longest request)',
            concurrency_level: 100,
            complete_requests: 1000,
            time_taken: 2000.0,
            failed_requests: 2,
            total_transferred: 875172966,
            html_transferred: 875172966,
            requests_per_second: 500.0,
            time_per_request: 500.0,
            time_per_request_2: 100.0,
            transfer_rate: 1207.0,
            connection_time_min: 100.0,
            connection_time_max: 100.0,
            connection_time_avg: 100.0,
            processing_time_min: 100.0,
            processing_time_max: 100.0,
            processing_time_avg: 100.0,
            waiting_time_min: 100.0,
            waiting_time_max: 100.0,
            waiting_time_avg: 100.0,
            total_time_min: 100.0,
          },
        ],
      },
    }
  }

  componentDidMount() {
    axios
      .get(
        `https://hackathon-2021.ddns.net/v1/sites/${this.props.match.params.id}/`,
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        this.setState({ data: data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
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
          data: [0, this.state.data.open_ports.length],
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
          data: [0, this.state.data.broken_links.length],
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
          data: [0, this.state.data.vulnerabilities.length],
        },
      ],
    }
    return (
      <div className="content">
        <div className="content_header">
          <a href="#">
            {this.state.data.hostname}
            <FiChevronDown size={16} />
          </a>
          <p>{this.state.data.homepage_url} • 86760329</p>
        </div>
        <div className="mm">
          <ul>
            <li>
              <a
                onClick={() => this.setState({ select: 1 })}
                className={this.state.select == 1 ? 'active' : 'n'}
              >
                Аудит
              </a>
            </li>
            <li>
              <a
                className={this.state.select == 2 ? 'active' : 'n'}
                onClick={() => this.setState({ select: 2 })}
              >
                Уязвимости
              </a>
            </li>
            <li>
              <a
                className={this.state.select == 4 ? 'active' : 'n'}
                onClick={() => this.setState({ select: 4 })}
              >
                Нагрузочные тесты
              </a>
            </li>
            <li>
              <a
                className={this.state.select == 3 ? 'active' : 'n'}
                onClick={() => this.setState({ select: 3 })}
              >
                Битые ссылки
              </a>
            </li>
          </ul>
        </div>
        {this.state.select == 1 ? (
          <div className="content_main">
            <div className="info">
              <div className="info_item">
                <p>
                  <b>Зарегистрирован</b>
                </p>
                <p>{this.state.data.created_date}</p>
              </div>
              <div className="info_item">
                <p>
                  <b>Обновлен</b>
                </p>
                <p>{this.state.data.last_modified}</p>
              </div>
              <div className="info_item">
                <p>
                  <b>Название</b>
                </p>
                <p>{this.state.data.title}</p>
              </div>
              <div className="info_item">
                <p>
                  <b>tls_version</b>
                </p>
                <p>{this.state.data.tls_version}</p>
              </div>
            </div>
            <div className="row">
              <div className="item">
                <h2 style={{ color: '#FC4331' }}>Ошибки</h2>
                <p>{this.state.data.broken_links.length}</p>
              </div>
              <div className="item">
                <h2 style={{ color: '#EBBE4B' }}>Предупреждения</h2>
                <p>{this.state.data.vulnerabilities.length}</p>
              </div>
              <div className="item">
                <h2 style={{ color: '#5F8EC8' }}>Уведомления</h2>
                <p>{this.state.data.open_ports.length}</p>
              </div>
            </div>
            <div style={{ paddingLeft: 18, paddingTop: 30, fontWeight: 500 }}>
              <p>Данные</p>
            </div>
            <div className="row-4">
              <div className="item">
                <h2>общее количество ссылок</h2>
                <p>{this.state.data.total_links_count}</p>
              </div>
              <div className="item">
                <h2>скорость загрузки</h2>
                <p
                  style={{
                    marginBottom: 10,
                    paddingLeft: 10,
                    paddingBottom: 2,
                    paddingTop: 2,
                    paddingRight: 10,
                    display: 'block',

                    borderRadius: 10,

                    background:
                      this.state.data.loading_speed * 1000 < 2000
                        ? '#5DDE5E'
                        : '#FD6360',
                    color: 'white',
                  }}
                >
                  {' '}
                  {this.state.data.loading_speed * 1000} ms
                </p>
              </div>
              <div className="item">
                <h2>версия ОС</h2>
                <p>{this.state.data.os_version}</p>
              </div>
              <div className="item">
                <h2>версия php</h2>
                <p>{this.state.data.php_version}</p>
              </div>
              <div className="item">
                <h2>предупреждение php</h2>
                <p>
                  {this.state.data.php_warning == null
                    ? 'Нет'
                    : this.state.data.php_warning}
                </p>
              </div>
              <div className="item">
                <h2>версия веб-сервера</h2>
                <p>
                  {this.state.data.web_server_version == null
                    ? 'Нет'
                    : this.state.data.web_server_version}
                </p>
              </div>
              <div className="item">
                <h2>предупреждение веб-сервера</h2>
                <p>
                  {this.state.data.web_server_warning == null
                    ? 'Нет'
                    : this.state.data.web_server_warning}
                </p>
              </div>
              <div className="item">
                <h2>имя фреймворка</h2>
                <p>
                  {this.state.data.framework_name == null
                    ? 'Нет'
                    : this.state.data.framework_name}
                </p>
              </div>
              <div className="item">
                <h2>предупреждение о фреймворке</h2>
                <p>
                  {this.state.data.framework_warning == null
                    ? 'Нет'
                    : this.state.data.framework_warning}
                </p>
              </div>
              <div className="item">
                <h2>количество битых ссылок</h2>
                <p>
                  {this.state.data.broken_links_count == null
                    ? 'Нет'
                    : this.state.data.broken_links_count}
                </p>
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
              <p>Диаграммы</p>
            </div>
            <div className="row">
              <div className="chart">
                <div className="chart_top">
                  <p>открытые порты</p>
                </div>
                <HighchartsReact highcharts={Highcharts} options={options} />
              </div>
              <div className="chart">
                <div className="chart_top">
                  <p>битые ссылки</p>
                </div>
                <HighchartsReact highcharts={Highcharts} options={options2} />
              </div>
              <div className="chart">
                <div className="chart_top">
                  <p>уязвимости</p>
                </div>
                <HighchartsReact highcharts={Highcharts} options={options3} />
              </div>
            </div>
          </div>
        ) : this.state.select == 2 ? (
          <div>
            <div className="table">
              <table>
                <tr>
                  <th class="pl-15">уязвимости</th>
                  <th>имя хоста </th>
                </tr>
                {this.state.data.vulnerabilities.map((item) => (
                  <tr>
                    <td class="pl-15">{item.site_hostname}</td>
                    <td>{item.text}</td>
                  </tr>
                ))}
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
                  <th>path</th>
                  <th>url</th>
                  <th>http code</th>
                </tr>

                {this.state.data.broken_links.map((item) => (
                  <tr>
                    <td class="pl-15">{item.site_hostname}</td>
                    <td>{item.path}</td>
                    <td>{item.url}</td>
                    <td>{item.http_code}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        ) : this.state.select == 4 ? (
          <div>
            {' '}
            <div
              style={{
                paddingLeft: 18,
                paddingTop: 30,
                fontWeight: 500,
                paddingBottom: 20,
              }}
            >
              <p>Данные</p>
            </div>
            <div className="row-5">
              <div className="item">
                <h2>Среднее кол-во запросов в секундуу</h2>
                <p
                  style={{
                    color:
                      this.state.data.ab_tests[0].requests_per_second < 26
                        ? 'green'
                        : 'red',
                  }}
                >
                  {this.state.data.ab_tests[0].requests_per_second}
                </p>
              </div>
              <div className="item">
                <h2>Конкурентные потоки</h2>
                <p>{this.state.data.ab_tests[0].concurrency_level}</p>
              </div>
              <div className="item">
                <h2>Кол-во направленные запросов</h2>
                <p>{this.state.data.ab_tests[0].complete_requests}</p>
              </div>
              <div className="item">
                <h2>Общее время выполнения</h2>
                <p>{this.state.data.ab_tests[0].time_taken}</p>
              </div>
              <div className="item">
                <h2>Провальные запросы</h2>
                <p>{this.state.data.ab_tests[0].failed_requests}</p>
              </div>
              <div className="item">
                <h2>Загружено байтов</h2>
                <p>{this.state.data.ab_tests[0].total_transferred}</p>
              </div>
              <div className="item">
                <h2>Загружено байтов HTML</h2>
                <p>{this.state.data.ab_tests[0].html_transferred}</p>
              </div>

              <div className="item">
                <h2>Среднее время выполнения запроса [ms]</h2>
                <p>{this.state.data.ab_tests[0].time_per_request}</p>
              </div>
              <div className="item">
                <h2>Среднее время выполнения запроса по всем потокам [ms]</h2>
                <p>{this.state.data.ab_tests[0].time_per_request_2}</p>
              </div>
              <div className="item">
                <h2>Скорость загрузки [килобайт/сек]</h2>
                <p>{this.state.data.ab_tests[0].transfer_rate}</p>
              </div>
              <div className="item">
                <h2>Время коннекта (мин.) [ms]</h2>
                <p>{this.state.data.ab_tests[0].connection_time_min}</p>
              </div>
              <div className="item">
                <h2>Время коннекта (макс.) [ms]</h2>
                <p>{this.state.data.ab_tests[0].connection_time_max}</p>
              </div>
              <div className="item">
                <h2>сВремя коннекта (сред.) [ms]</h2>
                <p>{this.state.data.ab_tests[0].connection_time_avg}</p>
              </div>
              <div className="item">
                <h2>Время обработки (мин.) [ms]</h2>
                <p>{this.state.data.ab_tests[0].processing_time_min}</p>
              </div>
              <div className="item">
                <h2>Время обработки (макс.) [ms]</h2>
                <p>{this.state.data.ab_tests[0].processing_time_max}</p>
              </div>
              <div className="item">
                <h2>Время обработки (сред.) [ms]</h2>
                <p>{this.state.data.ab_tests[0].processing_time_avg}</p>
              </div>
              <div className="item">
                <h2>Время ожидания (мин.) [ms]</h2>
                <p>{this.state.data.ab_tests[0].waiting_time_min}</p>
              </div>
              <div className="item">
                <h2>Время ожидания (сред.) [ms]</h2>
                <p>{this.state.data.ab_tests[0].waiting_time_avg}</p>
              </div>
              <div className="item">
                <h2>Время ожидания (мин.) [ms]</h2>
                <p>{this.state.data.ab_tests[0].total_time_min}</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
