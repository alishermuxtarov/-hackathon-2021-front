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
            <h3>GET - sites</h3>
            <p>https://hackathon-2021.ddns.net/v1/sites</p>
          </div>
        </div>
        <div className="item">
          <div className="item_left">
            <h3>GET - sites by ID</h3>
            <p>https://hackathon-2021.ddns.net/v1/sites/:id/</p>
          </div>
        </div>
      </div>
    )
  }
}
