import * as React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'

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
  }
}

export const Group = ({ group, columns }) => {
  return (
    <ListItem key={group.id}>
      {columns.map((column, index) => {
        let value = group[column]

        return <ListItemText key={group.id + index} style={styles[column]} primary={value} />
      })
        // jelölni  a current usert
        // jelölni, akinek már megvan
      }
    </ListItem>
  )
}
