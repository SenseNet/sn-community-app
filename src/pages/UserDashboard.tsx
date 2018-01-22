import * as React from 'react'
import { connect } from 'react-redux'
import { SNCommunityAppReducers } from '../Reducers'
import { UserProfile } from '../components/UserProfile/UserProfile'

interface UserDashboardProps {
    user: any,
    githubUser: any,
    match: any,
    position: number,
    topThreeInQuarter: number[],
    neededReputationChange: number,
    neededPullRequests: number
}

class UserDashboard extends React.Component<UserDashboardProps, {}> {
    render() {
        const { match, user, githubUser, position, topThreeInQuarter, neededReputationChange, neededPullRequests } = this.props;
        const top = user && user !== undefined ? topThreeInQuarter.indexOf(user.user_id) + 1 : -1
        return (
            <div>
                {isNaN(parseInt(match.params.id, 0)) || user === undefined ? null :
                    <UserProfile user={user} githubUser={githubUser} position={position} top={top > -1 ? top : false} remaining={neededReputationChange} remainingPr={neededPullRequests} />}
            </div >
        )
    }
}

const mapStateToProps = (state, match) => {
    const { id } = match.match.params
    return {
        user: SNCommunityAppReducers.getUserById(state.SNCommunityApp.stackoverflow, id),
        githubUser: SNCommunityAppReducers.getGithubUserBySOId(state.SNCommunityApp.github, id),
        position: SNCommunityAppReducers.getUsersPosition(state.SNCommunityApp.stackoverflow, id),
        topThreeInQuarter: SNCommunityAppReducers.getTopThreeByReputation(state.SNCommunityApp.stackoverflow),
        neededReputationChange: SNCommunityAppReducers.getNeededReputationChange(state.SNCommunityApp.stackoverflow, id),
        neededPullRequests: SNCommunityAppReducers.getNeededPullRequests(state.SNCommunityApp, id),
    }
}

export default connect(mapStateToProps, {})(UserDashboard)