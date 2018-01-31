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

export const BySNAnswers = ({ users }) => {
  return (
    <List style={styles.toplist}>
      {users.map((user, index) => {
        let u = {
          id: user.user.user_id,
          rank: index + 1,
          avatarUrl: user.user.profile_image,
          path: user.user.link,
          displayName: Helpers.decodeHtml(user.user.display_name),
          reputation: user.user.reputation,
          index: index,
          score: user.score
        }
        const columns = ['avatarUrl', 'displayName', 'score']
        return index < 10 ? (<User user={u} key={u.id} columns={columns} />) : null
      }
      )}
    </List>
  )
}
