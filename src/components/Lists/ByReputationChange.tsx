import * as React from 'react'
import { User } from './User'
import { Helpers } from '../../Helpers'
import { List } from '@material-ui/Core'

const styles = {
  toplist: {
    textAlign: 'left',
    margin: '0 auto',
    padding: 0,
    maxWidth: 600,
    listStyleType: 'none'
  } as React.CSSProperties
}

export const ByReputationChange = ({ users }) => {
  return (
    <List style={styles.toplist}>
      {users.map((user, index) => {
        const danger = Helpers.isInDanger(user.reputation_change_quarter, 100)
        const completed = Helpers.completed(user.reputation_change_quarter, 100)
        let u = {
          id: user.user_id,
          rank: index + 1,
          avatarUrl: user.profile_image,
          path: user.link,
          displayName: Helpers.decodeHtml(user.display_name),
          reputation: user.reputation,
          repInQuarter: user.reputation_change_quarter,
          index: index,
          danger: danger,
          completed: completed,
          fullname: Helpers.getUsernameBySOID(Number(user.user_id))
        }
        const columns = ['avatarUrl', 'displayName', 'repInQuarter']
        return (<User user={u} key={index} columns={columns} />)
      }
      )}
    </List>
  )
}
