import React, { Component } from 'react'
import { FiChevronDown, FiStar } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="content_settings">
        <div className="item">
          <div className="item_left">
            <img
              src="https://csn-tv.ru/storage/uploads/originals/kuwbmaqef59ino2ic6xe.jpg"
              alt=""
            />
            <h3>ClickHouse IDE - Works with any database</h3>
            <p>
              ClickHouse — это колоночная аналитическая СУБД с открытым кодом,
              позволяющая выполнять аналитические запросы в режиме реального
              времени на структурированных больших данных, разрабатываемая
              компанией Яндекс.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
