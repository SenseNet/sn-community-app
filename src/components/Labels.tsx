import * as React from 'react'

const styles = {
  list: {
    padding: 0,
    margin: 0,
    width: '100%',
    textAlign: 'left',
  },
  label: {
    color: '#fff',
    listStyleType: 'none',
    margin: '0 5px 5px',
    display: 'inline-block',
    padding: '3px 4px',
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: 1,
    borderRadius: 2,
    boxShadow: 'inset 0 -1px 0 rgba(27,31,35,0.12)',
    fontFamily: 'Segoe UI'
  }
}

export const Labels = ({ labels }) => {
  return (
    <ul style={styles.list}>
      {labels.map(label => {
        return <li key={label.id} style={{ ...{ backgroundColor: `#${label.color}` }, ...styles.label } as any}>{label.name}</li>
      })}
    </ul>
  )
}
