import * as React from 'react'
import List from 'material-ui/List'
import { User } from './User'
import { Helpers } from '../../Helpers'

const styles = {
  toplist: {
    textAlign: 'left',
    margin: '0 auto',
    padding: 0,
    maxWidth: 600,
    listStyleType: 'none'
  }
}

export const AllTime = ({ users }) => {
  return (
    <List style={styles.toplist}>
      {users.map((user, index) => {
        let u = {
          id: user.user_id,
          rank: index + 1,
          avatarUrl: user.profile_image,
          path: user.link,
          displayName: Helpers.decodeHtml(user.display_name),
          reputation: user.reputation,
          repInQuarter: user.reputation_change_quarter,
          index: index
        }
        const columns = ['reputation', 'avatarUrl', 'displayName', 'repInQuarter']
        return (<User user={u} key={index} columns={columns} />)
      }
      )}
    </List>
  )
}
