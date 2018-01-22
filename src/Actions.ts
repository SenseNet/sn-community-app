import { normalize } from 'normalizr'
import { Schemas } from './Schema'
import { Helpers } from './Helpers'

export module SNCommunityAppActions {
    export const getSOStats = (ids: string) => ({
        type: 'GET_SO_STATS',
        ids
    })
    export const getSOStatsSuccess = (response: any) => ({
        type: 'GET_SO_STATS_SUCCESS',
        response: normalize(response.items, Schemas.arrayOfContent)
    })
    export const getSOStatsFailure = (error: Helpers.ErrorObject) => ({
        type: 'GET_SO_STATS_FAILURE',
        message: error.message || 'An error occured!'
    })
    export const getSOSNTagAnswerers = () => ({
        type: 'GET_SO_SNANSWERERS'
    })
    export const getSOSNTagAnswerersSuccess = (response: any) => ({
        type: 'GET_SO_SNANSWERERS_SUCCESS',
        response: response.items
    })
    export const getSOSNTagAnswerersFailure = (error: Helpers.ErrorObject) => ({
        type: 'GET_SO_SNANSWERERS_FAILURE',
        message: error.message || 'An error occured!'
    })
    export const getSOQuestions = () => ({
        type: 'GET_SO_QUESTIONS'
    })
    export const getSOQuestionsSuccess = (response: any) => ({
        type: 'GET_SO_QUESTIONS_SUCCESS',
        response: response.items
    })
    export const getSOQuestionsFailure = (error: Helpers.ErrorObject) => ({
        type: 'GET_SO_QUESTIONS_FAILURE',
        message: error.message || 'An error occured!'
    })
    export const getIssues = (issues: any[], label?: string) => ({
        type: 'GET_ISSUES',
        issues,
        label: label || ''
    })
    export const getPullRequests = (pullrequests: Object) => ({
        type: 'GET_PULLREQUESTS',
        pullrequests
    })
}