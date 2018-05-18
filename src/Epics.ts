import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import { ajax } from 'rxjs/observable/dom/ajax'
import { SNCommunityAppActions } from './Actions'

export namespace SNCommunityAppEpics {

  export const getSOStatsEpic = (action$, store) => {
    return action$.ofType('GET_SO_STATS')
      .mergeMap(action => {
        const path = `https://api.stackexchange.com/2.2/users/${action.ids}?order=desc&sort=reputation&site=stackoverflow`
        return ajax({ url: path, method: 'GET', crossDomain: true, responseType: 'json' })
          .map(e => SNCommunityAppActions.getSOStatsSuccess(e.response))
          .catch(error => Observable.of(SNCommunityAppActions.getSOStatsFailure(error)))
      })
  }

  export const getSOQuestionsEpic = (action$, store) => {
    return action$.ofType('GET_SO_QUESTIONS')
      .mergeMap(action => {
        const path = `https://api.stackexchange.com/2.2/questions/no-answers?order=desc&sort=activity&tagged=sensenet&site=stackoverflow`
        return ajax({ url: path, method: 'GET', crossDomain: true, responseType: 'json' })
          .map(e => SNCommunityAppActions.getSOQuestionsSuccess(e.response))
          .catch(error => Observable.of(SNCommunityAppActions.getSOQuestionsFailure(error)))
      })
  }

  export const getSOSNTagAnswerersEpic = (action$, store) => {
    return action$.ofType('GET_SO_SNANSWERERS')
      .mergeMap(action => {
        const path = `https://api.stackexchange.com/2.2/tags/sensenet/top-answerers/all_time?site=stackoverflow`
        return ajax({ url: path, method: 'GET', crossDomain: true, responseType: 'json' })
          .map(e => SNCommunityAppActions.getSOSNTagAnswerersSuccess(e.response))
          .catch(error => Observable.of(SNCommunityAppActions.getSOStatsFailure(error)))
      })
  }

  export const rootEpic = combineEpics(
    Epics.rootEpic,
    getSOStatsEpic,
    getSOQuestionsEpic,
    getSOSNTagAnswerersEpic
  )
}
