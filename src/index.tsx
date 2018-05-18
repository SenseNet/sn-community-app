import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  HashRouter as Router
} from 'react-router-dom'
import { applyMiddleware, combineReducers, createStore } from 'redux'
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

// const sensenet = Reducers.sensenet
const SNCommunityApp = SNCommunityAppReducers.SNCommunityApp
const myReducer = combineReducers({
  // sensenet,
  SNCommunityApp
})
// const epicMiddleware = createEpicMiddleware(SNCommunityAppEpics.rootEpic)
const logger = createLogger()
const ids = Helpers.getSoIds()
let store = createStore(
  myReducer,
  {},
  applyMiddleware(logger)
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