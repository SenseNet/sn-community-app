import * as React from 'react'
import * as FontAwesome from 'react-fontawesome'

const styles = {
    pr: {
        marginTop: 20,
        textTransform: 'uppercase',
        fontSize: '18px'
    },
    prNum: {
        fontWeight: 'bold',
        fontSize: '20px',
        verticalAlign: 'middle',
        display: 'inline-block',
        marginTop: '-3px'
    }
}

export const PrRow = ({ prNum }) => {
    return (
        <div style={styles.pr}><FontAwesome name="github" /> Number of pull requests: <span style={styles.prNum as any}>{prNum}</span>
        </div>
    )
}