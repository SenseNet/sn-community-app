import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'babel-polyfill'
import {
  HashRouter as Router
} from 'react-router-dom'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { promiseMiddleware } from '@sensenet/redux-promise-middleware'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import { SNCommunityAppReducers } from './Reducers'
import { SNCommunityAppActions } from './Actions'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Helpers } from './Helpers'
import './index.css'

const issues = require('./data/issues.json')
const pullrequests = require('./data/pullrequests.json')
const users = require('./data/users.json')

const SNCommunityApp = SNCommunityAppReducers.SNCommunityApp
const myReducer = combineReducers({
  SNCommunityApp
})
const logger = createLogger()
const ids = Helpers.getSoIds()
const pm = promiseMiddleware(null as any);
let store = createStore(
  myReducer,
  {},
  applyMiddleware(logger, pm)
)
store.dispatch(SNCommunityAppActions.getSOStats(ids))
store.dispatch(SNCommunityAppActions.getSOSNTagAnswerers())
store.dispatch(SNCommunityAppActions.getSOQuestions())
store.dispatch(SNCommunityAppActions.getIssues(issues))
store.dispatch(SNCommunityAppActions.getPullRequests(pullrequests))
store.dispatch(SNCommunityAppActions.getStatsByGroups(users))

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/">
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()