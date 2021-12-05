import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import AuditContent from './components/Audit/Content'
import Chat from './components/Chat'
import Content from './components/Dashboard/Content'
import Header from './components/Header'
import Footer from './components/Home/Footer'
import Table from './components/Home/Table'
import Loader from './components/Loader'
import Loader2 from './components/Loader2'
import MainMenu from './components/MainMenu'
import Menu from './components/Menu'
import MetriksContent from './components/Metriks/Content'
import MobileMenu from './components/MobileMenu'
import Notification from './components/Notification'
import ScrollToTop from './components/ScrollToTop'
import Search from './components/Search'
import TestContent from './components/Tests/Content'
import AddLink from './screens/AddLink'
import API from './screens/API'
import Blog from './screens/Blog'
import Code from './screens/Code'
import Dashboard from './screens/Dashboard'
import Login from './screens/Login'
import Main from './screens/Main'
import Register from './screens/Register'
import Settings from './screens/Settings'
import Welome from './screens/Welcome'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chat: false,
      notification: false,
      menu: false,
    }
  }

  chatEvent() {
    this.setState({ chat: !this.state.chat })
  }

  chatEventClose() {
    this.setState({ chat: false })
  }

  notificationEvent() {
    this.setState({ notification: !this.state.notification })
  }

  notificationEventClose() {
    this.setState({ notification: false })
  }

  menuEvent() {
    this.setState({ menu: !this.state.menu })
  }

  menuEventClose() {
    this.setState({ menu: false })
  }

  render() {
    return (
      <div className="wrapper">
        <ScrollToTop>
          <Switch>
            <Route
              exact
              path="/welcome"
              render={(props) => (
                <div>
                  <Welome />
                </div>
              )}
            />
            <Route
              exact
              path="/home"
              render={(props) => (
                <div>
                  <Header
                    chatEvent={this.chatEvent.bind(this)}
                    notificationEvent={this.notificationEvent.bind(this)}
                    menuEvent={this.menuEvent.bind(this)}
                  />

                  <Loader2 />

                  <Chat
                    chat={this.state.chat}
                    chatEventClose={this.chatEventClose.bind(this)}
                  />

                  <Notification
                    notification={this.state.notification}
                    notificationEventClose={this.notificationEventClose.bind(
                      this,
                    )}
                  />

                  <MobileMenu
                    menu={this.state.menu}
                    menuEventClose={this.menuEventClose.bind(this)}
                  />
                  <div className="dashboard">
                    <MainMenu />
                    <Main />
                  </div>
                </div>
              )}
            />

            <Route
              exact
              path="/audit"
              render={(props) => (
                <div>
                  <Header
                    chatEvent={this.chatEvent.bind(this)}
                    notificationEvent={this.notificationEvent.bind(this)}
                    menuEvent={this.menuEvent.bind(this)}
                  />
                  <Loader2 />

                  <Chat
                    chat={this.state.chat}
                    chatEventClose={this.chatEventClose.bind(this)}
                  />

                  <Notification
                    notification={this.state.notification}
                    notificationEventClose={this.notificationEventClose.bind(
                      this,
                    )}
                  />

                  <MobileMenu
                    menu={this.state.menu}
                    menuEventClose={this.menuEventClose.bind(this)}
                  />
                  <div className="dashboard">
                    <MainMenu />
                    <AuditContent />
                  </div>
                </div>
              )}
            />

            <Route
              exact
              path="/metriks"
              render={(props) => (
                <div>
                  <Header
                    chatEvent={this.chatEvent.bind(this)}
                    notificationEvent={this.notificationEvent.bind(this)}
                    menuEvent={this.menuEvent.bind(this)}
                  />
                  <Loader2 />

                  <Chat
                    chat={this.state.chat}
                    chatEventClose={this.chatEventClose.bind(this)}
                  />

                  <Notification
                    notification={this.state.notification}
                    notificationEventClose={this.notificationEventClose.bind(
                      this,
                    )}
                  />

                  <MobileMenu
                    menu={this.state.menu}
                    menuEventClose={this.menuEventClose.bind(this)}
                  />
                  <div className="dashboard">
                    <MainMenu />
                    <MetriksContent />
                  </div>
                </div>
              )}
            />

            <Route
              exact
              path="/tests"
              render={(props) => (
                <div>
                  <Header
                    chatEvent={this.chatEvent.bind(this)}
                    notificationEvent={this.notificationEvent.bind(this)}
                    menuEvent={this.menuEvent.bind(this)}
                  />
                  <Loader2 />

                  <Chat
                    chat={this.state.chat}
                    chatEventClose={this.chatEventClose.bind(this)}
                  />

                  <Notification
                    notification={this.state.notification}
                    notificationEventClose={this.notificationEventClose.bind(
                      this,
                    )}
                  />

                  <MobileMenu
                    menu={this.state.menu}
                    menuEventClose={this.menuEventClose.bind(this)}
                  />
                  <div className="dashboard">
                    <MainMenu />
                    <TestContent />
                  </div>
                </div>
              )}
            />

            <Route
              exact
              path="/addlink"
              render={(props) => (
                <div>
                  <Header
                    chatEvent={this.chatEvent.bind(this)}
                    notificationEvent={this.notificationEvent.bind(this)}
                    menuEvent={this.menuEvent.bind(this)}
                  />

                  <Loader2 />
                  <Chat
                    chat={this.state.chat}
                    chatEventClose={this.chatEventClose.bind(this)}
                  />

                  <Notification
                    notification={this.state.notification}
                    notificationEventClose={this.notificationEventClose.bind(
                      this,
                    )}
                  />

                  <MobileMenu
                    menu={this.state.menu}
                    menuEventClose={this.menuEventClose.bind(this)}
                  />
                  <div className="dashboard">
                    <MainMenu />
                    <AddLink />
                  </div>
                </div>
              )}
            />

            <Route
              exact
              path="/api"
              render={(props) => (
                <div>
                  {' '}
                  <Header
                    chatEvent={this.chatEvent.bind(this)}
                    notificationEvent={this.notificationEvent.bind(this)}
                    menuEvent={this.menuEvent.bind(this)}
                  />
                  <Chat
                    chat={this.state.chat}
                    chatEventClose={this.chatEventClose.bind(this)}
                  />
                  <Notification
                    notification={this.state.notification}
                    notificationEventClose={this.notificationEventClose.bind(
                      this,
                    )}
                  />
                  <MobileMenu
                    menu={this.state.menu}
                    menuEventClose={this.menuEventClose.bind(this)}
                  />{' '}
                  <API />{' '}
                </div>
              )}
            />
            <Route
              exact
              path="/dashboard/:id"
              render={(match) => (
                <div>
                  {' '}
                  <Header
                    chatEvent={this.chatEvent.bind(this)}
                    notificationEvent={this.notificationEvent.bind(this)}
                    menuEvent={this.menuEvent.bind(this)}
                  />
                  <Loader2 />
                  <Chat
                    chat={this.state.chat}
                    chatEventClose={this.chatEventClose.bind(this)}
                  />
                  <Notification
                    notification={this.state.notification}
                    notificationEventClose={this.notificationEventClose.bind(
                      this,
                    )}
                  />
                  <MobileMenu
                    menu={this.state.menu}
                    menuEventClose={this.menuEventClose.bind(this)}
                  />
                  <Dashboard {...match} />{' '}
                </div>
              )}
            />
            <Route
              exact
              path="/settings"
              render={(props) => (
                <div>
                  <Header
                    chatEvent={this.chatEvent.bind(this)}
                    notificationEvent={this.notificationEvent.bind(this)}
                    menuEvent={this.menuEvent.bind(this)}
                  />
                  <Chat
                    chat={this.state.chat}
                    chatEventClose={this.chatEventClose.bind(this)}
                  />
                  <Notification
                    notification={this.state.notification}
                    notificationEventClose={this.notificationEventClose.bind(
                      this,
                    )}
                  />
                  <MobileMenu
                    menu={this.state.menu}
                    menuEventClose={this.menuEventClose.bind(this)}
                  />
                  <Settings />{' '}
                </div>
              )}
            />
            <Route
              exact
              path="/blog"
              render={(props) => (
                <div>
                  {' '}
                  <Header
                    chatEvent={this.chatEvent.bind(this)}
                    notificationEvent={this.notificationEvent.bind(this)}
                    menuEvent={this.menuEvent.bind(this)}
                  />
                  <Chat
                    chat={this.state.chat}
                    chatEventClose={this.chatEventClose.bind(this)}
                  />
                  <Notification
                    notification={this.state.notification}
                    notificationEventClose={this.notificationEventClose.bind(
                      this,
                    )}
                  />
                  <MobileMenu
                    menu={this.state.menu}
                    menuEventClose={this.menuEventClose.bind(this)}
                  />
                  <Blog />{' '}
                </div>
              )}
            />
            <Route exact path="/login" render={(props) => <Login />} />
            <Route exact path="/register" render={(props) => <Register />} />
            <Route exact path="/code" render={(props) => <Code />} />
            <Route component={Welome} />
          </Switch>
        </ScrollToTop>
      </div>
    )
  }
}
