import { normalize } from 'normalizr'
import { Schemas } from './Schema'
import { Helpers } from './Helpers'

export module SNCommunityAppActions {
  export const getSOStats = (ids: string) => ({
    type: 'GET_SO_STATS',
    ids,
    payload: async () => {
      const response = await fetch(`https://api.stackexchange.com/2.2/users/${ids}?order=desc&sort=reputation&site=stackoverflow`, {
        method: 'GET'
      })
      if (response.ok) {
        const json = await response.json();
        return normalize(json.items, Schemas.arrayOfContent)
      } else return response.statusText
    }
  })
  export const getSOSNTagAnswerers = () => ({
    type: 'GET_SO_SNANSWERERS',
    payload: async () => {
      const response = await fetch(`https://api.stackexchange.com/2.2/tags/sensenet/top-answerers/all_time?site=stackoverflow`, {
        method: 'GET'
      })
      if (response.ok) {
        const json = await response.json();
        return normalize(json.items, Schemas.arrayOfContent)
      } else return response.statusText
    }
  })
  // export const getSOSNTagAnswerersSuccess = (response: any) => ({
  //   type: 'GET_SO_SNANSWERERS_SUCCESS',
  //   response: response.items
  // })
  // export const getSOSNTagAnswerersFailure = (error: Helpers.ErrorObject) => ({
  //   type: 'GET_SO_SNANSWERERS_FAILURE',
  //   message: error.message || 'An error occured!'
  // })
  export const getSOQuestions = () => ({
    type: 'GET_SO_QUESTIONS',
    payload: async () => {
      const response = await fetch(`https://api.stackexchange.com/2.2/questions/no-answers?order=desc&sort=activity&tagged=sensenet&site=stackoverflow`, {
        method: 'GET'
      })
      if (response.ok) {
        const json = await response.json();
        return json.items
      }
      return response.statusText
    }
  })
  // export const getSOQuestionsSuccess = (response: any) => ({
  //   type: 'GET_SO_QUESTIONS_SUCCESS',
  //   response: response.items
  // })
  // export const getSOQuestionsFailure = (error: Helpers.ErrorObject) => ({
  //   type: 'GET_SO_QUESTIONS_FAILURE',
  //   message: error.message || 'An error occured!'
  // })
  export const getIssues = (issues: any[], label?: string) => ({
    type: 'GET_ISSUES',
    issues,
    label: label || ''
  })
  export const getPullRequests = (pullrequests: Object) => ({
    type: 'GET_PULLREQUESTS',
    pullrequests
  })
  export const getStatsByGroups = (users: any[]) => ({
    type: 'GET_STATS_BY_GROUPS',
    ids: Helpers.getGroups(users)
  })
}
