import React, { Component } from 'react'
import {
  FiChevronDown,
  FiStar,
  FiPieChart,
  FiRss,
  FiShare2,
  FiUsers,
  FiTrello,
  FiSettings,
} from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'

export default class Loader2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loader: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loader: false })
    }, 1200)
  }

  render() {
    return (
      <div
        className="loader2"
        style={{ display: this.state.loader ? 'flex' : 'none' }}
      >
        <img
          src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif"
          alt=""
        />
      </div>
    )
  }
}
