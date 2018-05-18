import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { Header } from './components/Header'
import Login from './pages/Login'
import { Help } from './pages/Help'
import { Rules } from './pages/Rules'
import SNIssues from './pages/SNIssues'
import UserDashboard from './pages/UserDashboard'
import CompanyDashboard from './pages/CompanyDashboard'
import SNQuestions from './pages/SNQuestions'
import SoTips from './pages/SoTips'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/Core'
import { lightBlue, lightGreen, red } from '@material-ui/Core/colors'

import './App.css'

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: lightGreen,
    error: red,
  },
  overrides: {

  }
})

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <div>
              <Header />
              <Route exact={true} path="/" component={CompanyDashboard} />
              <Route path="/login" component={Login} />
              <Route path="/:id" component={UserDashboard} />
              <Route path="/company" component={CompanyDashboard} />
              <Route path="/questions" component={SNQuestions} />
              <Route path="/help" component={Help} />
              <Route exact={true} path="/issues" component={SNIssues} />
              <Route path="/issues/:label" component={SNIssues} />
              <Route path="/rules" component={Rules} />
              <Route path="/tips-and-tricks/so" component={SoTips} />
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
