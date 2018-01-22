import { combineReducers } from 'redux';

const goals = {
    stackoverflow: 100,
    pr: 10
}

const usersek = require('./data/users.json')

export module SNCommunityAppReducers {
    export const SOStats = (state = {}, action: any) => {
        switch (action.type) {
            case 'GET_SO_STATS_SUCCESS':
                return ({ ...state, ...action.response.entities.users });
            case 'GET_SO_STATS_FAILURE':
                return state
            default:
                return state
        }
    }
    export const SOSNTagAnswerers = (state = [], action: any) => {
        switch (action.type) {
            case 'GET_SO_SNANSWERERS_SUCCESS':
                return action.response;
            case 'GET_SO_STATS_FAILURE':
                return state
            default:
                return state
        }
    }
    export const ids = (state = [], action: any) => {
        switch (action.type) {
            case 'GET_SO_STATS_SUCCESS':
                return action.response.result
            case 'GET_SO_STATS_FAILURE':
                return []
            default:
                return state
        }
    }
    export const SOError = (state = '', action: any) => {
        switch (action.type) {
            case 'GET_SO_STATS_FAILURE':
                return action.message
            default:
                return ''
        }
    }
    export const SOIsFetching = (state = false, action: any) => {
        switch (action.type) {
            case 'GET_SO_STATS':
                return true
            default:
                return false
        }
    }
    export const questions = (state = [], action: any) => {
        switch (action.type) {
            case 'GET_SO_QUESTIONS_SUCCESS':
                return action.response
            default:
                return state
        }
    }
    export const stackoverflow = combineReducers({
        users: SOStats,
        topusers: SOSNTagAnswerers,
        ids,
        error: SOError,
        isFetching: SOIsFetching,
        questions
    })

    export const issues = (state = [], action: any) => {
        switch (action.type) {
            case 'GET_ISSUES':
                return action.issues
            default:
                return state
        }
    }

    export const pullrequest = (state = {}, action: any) => {
        switch (action.type) {
            case 'GET_PULLREQUESTS':
                return action.pullrequests
            default:
                return state
        }
    }

    export const github = combineReducers({
        issues,
        pullrequest
    })

    export const SNCommunityApp = combineReducers({
        stackoverflow,
        github
    })

    export const getUserById = (state, id) => {
        return state.users[id]
    }

    export const getGithubUserBySOId = (state, id) => {
        let us = null, user = null
        usersek.map(u => {
            if (u.soId === id) {
                user = u
            }
        })
        if (user) {
            state.pullrequest.pullrequests.map(pu => {
                if (pu.user.id === parseInt(user.githubId, 0)) {
                    us = pu
                }
            })
        }
        return us
    }

    export const getUsersPosition = (state, id) => {
        return state.ids.indexOf(parseInt(id, 0)) + 1
    }

    export const getUsersOrderedByReputationChanges = (state) => {
        const users = state.users !== undefined ? Object.keys(state.users).map(key => {
            return state.users[key];
        }) : null
        const resortedUsers = users ? users.sort(reputationChangeComparator).reverse() : []
        return resortedUsers
    }

    export const getTopThreeByReputation = (state) => {
        let topThree = []
        const resortedUsers = getUsersOrderedByReputationChanges(state)
        resortedUsers.map((user: any, index) => {
            if (index < 3) {
                topThree.push(user.user_id)
            }
        })
        return topThree
    }

    export const getNeededReputationChange = (state, id) => {
        const user = getUserById(state, id)
        const repChange = user && user !== undefined ? user.reputation_change_quarter : 0
        return goals.stackoverflow - repChange
    }

    export const getNeededPullRequests = (state, id) => {
        const githubUser = getGithubUserBySOId(state.github, id)
        const pr = githubUser && githubUser !== undefined ? githubUser.count : 0
        return goals.pr - pr
    }

    export const getUsersByReputation = (state) => {
        const users = state.users !== undefined ? Object.keys(state.users).map(key => {
            return state.users[key];
        }) : null
        const resortedUsers = users ? users.sort(reputationComparator).reverse() : []
        return resortedUsers
    }

    export const getUsersOrderedByNumberOfPullRequests = (state) => {
        const users = state.pullrequest.pullrequests !== undefined ? Object.keys(state.pullrequest.pullrequests).map(key => {
            return state.pullrequest.pullrequests[key];
        }) : null
        const resortedUsers = users ? users.sort(prNumberComparator).reverse() : []
        return resortedUsers
    }

    export const getUsersOrderedBySNAnswers = (state) => 
        state.topusers;

    export const getQuestionsUnanswered = (state) => {
        return state.questions
    }

    export const getIssuesByLabel = (state, label) => {
        const is = []
        if (label !== undefined && state.issues.length > 0) {
            state.issues.map(issue => {
                if (filterByLabel(issue, label) && !filterDuplicate(is, issue)) {
                    is.push(issue)
                }
            })
        } else if (state.issues.length > 0) {
            state.issues.map(issue => {
                if (!filterDuplicate(is, issue) && filterGreenkeeper(issue) && filterPRs(issue) && !skipLabel(issue)) {
                    is.push(issue)
                }
            })
        }
        return is
    }

    export const allReputationChangeInQuarter = (state) => {
        let count = 0
        if (state.users.length > 0) {
            state.users.map(user => {
                count += user.reputation_change_quarter
            })
        }
        return count
    }

    export const getAllPrCount = (g) => {
        return g.pullrequest.total_count
    }

    export const getPrByUser = (g, user) => {
        return g.pullrequest
    }

    const reputationComparator = (a: any, b: any) => {
        return parseInt(a.reputation, 0) - parseInt(b.reputation, 0);
    }

    const reputationChangeComparator = (a: any, b: any) => {
        return parseInt(a.reputation_change_quarter, 0) - parseInt(b.reputation_change_quarter, 0);
    }

    const prNumberComparator = (a: any, b: any) => {
        return parseInt(a.count, 0) - parseInt(b.count, 0)
    }

    const filterByLabel = (issue, label) => {
        let hasLabel = false
        issue.labels.map(l => {
            if (l.name === label) {
                hasLabel = true
            }
        })
        return hasLabel
    }

    const filterDuplicate = (array, element) => {
        return array.filter(el => el.id === element.id).length > 0
    }

    const filterGreenkeeper = (issue) => {
        return issue.user.login !== 'greenkeeper[bot]'
    }

    const filterPRs = (issue) => {
        return issue.pull_request === undefined
    }

    const skipLabel = (issue) => {
        let hasLabel = false
        issue.labels.map(l => {
            if (l.name === 'discussion' || l.name === 'spike') {
                hasLabel = true
            }
        })
        return hasLabel
    }
}