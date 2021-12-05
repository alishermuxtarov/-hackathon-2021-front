import axios from 'axios'
import React, { Component } from 'react'
import { FiChevronDown, FiStar } from 'react-icons/fi'
import { TiWorld } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'
import Loader2 from '../../Loader2'

export default class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [
        {
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
          vulnerabilities: [1, 2],
          open_ports: [1, 2],
          broken_links: [1, 2],
        },
      ],
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    axios
      .get(`https://hackathon-2021.ddns.net/v1/sites/`)
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        this.setState({ results: data.results })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="table">
        <Loader2 />
        <table>
          <tr>
            <th class="pl-15">Проект</th>
            <th>Дата создания</th>
            <th>Предупреждение</th>
            <th>Версия ОС</th>
            <th>кол-во ссылок</th>
            <th>кол-во битых ссылок</th>
            <th>скорость загрузки</th>
            <th class="pl-15">фреймворк</th>
          </tr>
          {this.state.results
            .filter((item) => item.hostname.includes(this.props.search_text))
            .map((item, i) => (
              <tr>
                <td class="pl-15">
                  <div className="t_please">{i + 1}</div>
                  <NavLink to={'dashboard/' + item.id}>
                    <p>
                      <TiWorld size={14} />
                      {item.hostname} <br />{' '}
                      <a>
                        {item.homepage_url} • <span>{item.id}</span>{' '}
                      </a>
                    </p>
                  </NavLink>
                </td>
                <td>{item.created_date}</td>
                <td>{item.os_warning}</td>
                <td>{item.os_version}</td>
                <td>{item.total_links_count}</td>
                <td>{item.broken_links}</td>
                <td>{item.loading_speed * 1000} ms</td>
                <td class="pl-14">{item.framework_name}</td>
              </tr>
            ))}
        </table>
      </div>
    )
  }
}
