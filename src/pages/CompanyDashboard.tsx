import * as React from 'react'
import { connect } from 'react-redux'
import { SNCommunityAppReducers } from '../Reducers'
import { ByReputationChange } from '../components/Lists/ByReputationChange'
import { ByPullRequests } from '../components/Lists/ByPullRequests'
import ByGroups from '../components/Lists/ByGroups'
import Summary from '../components/Summary'
import { Grid } from '@material-ui/Core'
import { withStyles } from '@material-ui/Core'
import moment from 'moment';
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    width: '1000px',
    margin: '0 auto'
  },
  container: {
    marginTop: 40
  }
})
const s = {
  title: {
    color: '#13a5ad',
    fontFamily: 'Gotham',
    textTransform: 'uppercase'
  } as React.CSSProperties
}

interface CompanyDashboardProps {
  users: any[],
  toplistByReputationChange: any[],
  toplistByPullRequests: any[],
  toplistBySNAnswers: any[],
  toplistByGroups: any[],
  classes: any,
  prcount: number
}

class CompanyDashboard extends React.Component<CompanyDashboardProps, {}> {
  allRepChange() {
    let count = 0
    if (this.props.users.length > 0) {
      this.props.users.map(user => {
        count += user.reputation_change_quarter
      })
    }
    return count
  }
  allRepChangePerYear() {
    let count = 0
    if (this.props.users.length > 0) {
      this.props.users.map(user => {
        count += user.reputation_change_year
      })
    }
    return count
  }
  render() {
    const { toplistByReputationChange, toplistByPullRequests, toplistByGroups, classes, prcount } = this.props
    const quarter = moment().quarter()
    return (
      <div className={classes.root}>
        {
          // sensenet tag válaszok
          // legtöbb sn tag válasz
        }
        <Summary allReputation={this.allRepChange()} classes={classes} allPrs={prcount} allReputationPerYear={this.allRepChangePerYear()} />
        <Grid container={true} spacing={40} className={classes.container}>
          <Grid item={true} xs={12} sm={4}>
            <h2 style={s.title}>Q{quarter} reputation</h2>
            <ByReputationChange users={toplistByReputationChange} />
          </Grid>
          <Grid item={true} xs={12} sm={4}>
            <h2 style={s.title}>Q{quarter} pull requests</h2>
            <ByPullRequests users={toplistByPullRequests} />
          </Grid>
          <Grid item={true} xs={12} sm={4}>
            <h2 style={s.title}>By team</h2>
            <ByGroups prgroups={toplistByGroups} />
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state, match) => {
  return {
    toplistByReputationChange: SNCommunityAppReducers.getUsersOrderedByReputationChanges(state.SNCommunityApp.stackoverflow),
    toplistByPullRequests: SNCommunityAppReducers.getUsersOrderedByNumberOfPullRequests(state.SNCommunityApp.github),
    toplistBySNAnswers: SNCommunityAppReducers.getUsersOrderedBySNAnswers(state.SNCommunityApp.stackoverflow),
    users: SNCommunityAppReducers.getUsersByReputation(state.SNCommunityApp.stackoverflow),
    prcount: SNCommunityAppReducers.getAllPrCount(state.SNCommunityApp.github),
    toplistByGroups: SNCommunityAppReducers.getToplistByGroups(state.SNCommunityApp)
  }
}

export default withStyles(styles)(connect(mapStateToProps, {})(CompanyDashboard))
