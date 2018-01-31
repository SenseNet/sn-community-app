import * as React from 'react'
import * as FontAwesome from 'react-fontawesome'

const styles = {
  reputation: {
    marginTop: 20,
    textTransform: 'uppercase',
    fontSize: '18px'
  },
  reputationNum: {
    fontWeight: 'bold',
    fontSize: '20px',
    verticalAlign: 'middle',
    display: 'inline-block',
    marginTop: '-3px'
  },
  star: {
    fontSize: 20,
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  gold: {
    color: '#ffd700'
  },
  silver: {
    color: '#c0c0c0'
  },
  bronze: {
    color: '#cd7f32'
  },
  change: {
    display: 'inline-block',
    verticalAlign: 'middle',
    margin: '0 0 0 5px'
  },
  positive: {
    color: '#9CCC65'
  },
  negative: {
    color: '#EF5350'
  },
  arrow: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 10
  }
}

export const ReputationRow = ({ reputation, change }) => {
  return (
    <div style={styles.reputation}><FontAwesome name="stack-overflow" /> Reputation: <span style={styles.reputationNum as any}>{reputation}</span>
      {change > 0 ?
        <span style={{ ...styles.change, ...styles.positive as any }}>
          <FontAwesome name="caret-up" />+ {change}
        </span>
        : <span style={{ ...styles.change, ...styles.negative as any }}>
          <FontAwesome name="caret-down" /> {change}
        </span>}
    </div>
  )
}
