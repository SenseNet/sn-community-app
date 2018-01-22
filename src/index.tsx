import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  HashRouter as Router
} from 'react-router-dom'
import { combineReducers } from 'redux'
import { Repository } from 'sn-client-js'
import { Store, Reducers } from 'sn-redux'
import { Provider } from 'react-redux';
import { SNCommunityAppReducers } from './Reducers'
import { SNCommunityAppEpics } from './Epics'
import { SNCommunityAppActions } from './Actions'
import App from './App'
import registerServiceWorker from './registerServiceWorker';
import { Helpers } from './Helpers';
import 'rxjs'
import './index.css'

const issues = require('./data/issues.json');
const pullrequests = require('./data/pullrequests.json');

const sensenet = Reducers.sensenet
const SNCommunityApp = SNCommunityAppReducers.SNCommunityApp

const myReducer = combineReducers({
  sensenet,
  SNCommunityApp
});

const ids = Helpers.getSoIds();

const repository = new Repository.SnRepository({
  RepositoryUrl: process.env.REACT_APP_SERVICE_URL || 'https://dmsservice.demo.sensenet.com',
  RequiredSelect: ['Id', 'Path', 'Name', 'Type', 'ParentId', 'Actions'],
  DefaultExpand: ['Actions']
});

const store = Store.configureStore(myReducer, SNCommunityAppEpics.rootEpic, undefined, {}, repository)
store.dispatch(SNCommunityAppActions.getSOStats(ids))
store.dispatch(SNCommunityAppActions.getSOSNTagAnswerers())
store.dispatch(SNCommunityAppActions.getSOQuestions())
store.dispatch(SNCommunityAppActions.getIssues(issues))
store.dispatch(SNCommunityAppActions.getPullRequests(pullrequests))

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/">
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
