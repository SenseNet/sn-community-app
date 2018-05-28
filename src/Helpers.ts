import moment from 'moment'

const usersek = require('./data/users.json')

export namespace Helpers {
  export class ErrorObject extends Object {
    message: string
  }

  export const decodeHtml = (html) => {
    var txt = document.createElement('textarea')
    txt.innerHTML = html
    return txt.value
  }

  export const isInDanger = (reputation: number, min: number) => {
    const currentQuarterStart = moment().startOf('quarter'),
      currentQuarterEnd = moment().endOf('quarter'),
      daysInCurrentQuarter = Math.abs(currentQuarterStart.diff(currentQuarterEnd, 'days')),
      remainingDays = Math.abs(currentQuarterEnd.diff(moment(), 'days')),
      requiredRepPerDay = min / daysInCurrentQuarter,
      remainingRep = min - reputation
    return remainingRep > (remainingDays * requiredRepPerDay)
  }

  export const completed = (current: number, min: number) => {
    return current >= min
  }

  export const getRepoNameFromUrl = (url: string) => {
    return url.substr(url.lastIndexOf('/') + 1)
  }

  export const getSOIdByGithubId = (id) => {
    let soId
    usersek.map(u => {
      if (parseInt(u.githubId, 0) === id) {
        soId = u.soId
      }
    })
    return soId
  }

  export const getGithubNames = () => {
    let usArray = []
    usersek.map(u => {
      usArray.push(u.githubUsername)
    })
    return usArray
  }

  export const getSoIds = () => {
    let usString = ''
    usersek.map((u, index) => {
      if (u.soId) {
        usString += `${u.soId};`
      }
    })
    return usString.substring(0, usString.length - 1)
  }

  export const getUsernameBySOID = (id) => {
    let username = ''
    usersek.map(user => {
      if (Number(user.soId) === Number(id)) {
        username = user.fullname
      }
    })
    return username
  }

  export const getUsernameByGithubID = (id) => {
    let username = ''
    usersek.map(user => {
      if (Number(user.githubId) === Number(id)) {
        username = user.fullname
      }
    })
    return username
  }

  export const getGroups = (users) => {
    let userIds = []
    users.map(user => {
      if (userIds.indexOf(user.team) === -1 && user.team) {
        userIds.push(user.team)
      }
    })
    return userIds
  }
}
