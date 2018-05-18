import * as React from 'react'
import {
  Link
} from 'react-router-dom'
import { ListItem, ListItemText, ListItemIcon, Avatar, IconButton } from '@material-ui/Core'
import Radium from 'radium'
import { Warning, Done } from '@material-ui/icons'
import * as FontAwesome from 'react-fontawesome'

const RadiumLink = Radium(Link)

const styles = {
  rank: {},
  avatar: {
    verticalAlign: 'middle',
  },
  img: {
    maxWidth: 24,
    maxHeight: 24,
    borderRadius: 5
  },
  link: {
    textDecoration: 'none',
    color: '#444'
  },
  displayName: {
    width: 200
  },
  name: {
    width: 325
  },
  reputation: {
    textAlign: 'right',
    width: 10
  },
  repInQuarter: {
    textAlign: 'right',
    width: 10
  },
  prInQuarter: {
    textAlign: 'right',
    width: 10
  },
  column: {
    textAlign: 'left'
  },
  warn: {
    color: '#EF5350',
    width: 20
  },
  email: {
    textAlign: 'center',
    width: 50
  },
  done: {
    color: '#009688'
  },
  thumbsup: {
    fontSize: 20
  },
  green: {
    background: '#E0F2F1',
    borderTop: 'solid 2px #fff'
  },
  grey: {
    background: '#ECEFF1',
    borderTop: 'solid 2px #fff'
  },
  red: {
    background: '#FFEBEE',
    borderTop: 'solid 2px #fff'
  }
}

export const User = ({ user, columns }) => {
  let icon, style
  if (user.danger) {
    icon = (
      <IconButton aria-label="Warning">
        <Warning style={styles.warn} />
      </IconButton>)
    style = styles.red
  } else if (user.completed) {
    icon = (
      <IconButton aria-label="Completed">
        <Done style={styles.done} />
      </IconButton>)
    style = styles.green
  } else {
    icon = (
      <IconButton>
        <FontAwesome name="thumbs-up" style={styles.thumbsup} />
      </IconButton>)
    style = styles.grey
  }
  return (
    <ListItem key={user.id} style={style}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      {columns.map((column, index) => {
        let value
        switch (column) {
          case 'displayName':
            value = <RadiumLink to={`/${user.id}`} style={styles.link}>{user.fullname}</RadiumLink>
            break
          case 'name':
            value = <RadiumLink to={`/${user.id}`} style={styles.link}>{user.fullname}</RadiumLink>
            break
          case 'avatarUrl':
            value = ''
            break
          default:
            value = user[column]
        }

        let el
        switch (column) {
          case 'avatarUrl':
            el = <Avatar src={user.avatarUrl} alt={user.displayName} key={user.id + index} />
            break
          default:
            el = <ListItemText key={user.id + index} style={styles[column]} primary={value} />
            break
        }

        return el
      })
        // jelölni  a current usert
        // jelölni, akinek már megvan
      }
    </ListItem>
  )
}
