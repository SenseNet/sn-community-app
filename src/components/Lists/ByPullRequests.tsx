import * as React from 'react'
import { User } from './User'
import { Helpers } from '../../Helpers'
import List from 'material-ui/List'

const styles = {
  toplist: {
    textAlign: 'left',
    margin: '0 auto',
    padding: 0,
    maxWidth: 600,
    listStyleType: 'none'
  }
}

export const ByPullRequests = ({ users }) => {
  return (
    <List style={styles.toplist}>
      {users.map((user, index) => {
        const danger = Helpers.isInDanger(user.count, 10)
        const completed = Helpers.completed(user.count, 10)
        const userData = user.user
        let u = {
          id: Helpers.getSOIdByGithubId(userData.id),
          rank: index + 1,
          avatarUrl: userData.avatar_url,
          path: userData.html_url,
          name: userData.name || user.username,
          prInQuarter: user.count,
          index: index,
          danger: danger,
          completed: completed,
          email: userData.email,
          fullname: Helpers.getUsernameByGithubID(Number(userData.id))
        }
        const columns = ['avatarUrl', 'name', 'prInQuarter']
        return (<User user={u} key={index} columns={columns} />)
      })}
    </List>
  )
}
